<script setup>
  import { ref, watch } from 'vue';
  import { getArtistID, getMusicDuration, getMusicFile, getMusicID } from '@/services/musicService';

  const props = defineProps({
    id: Number,
    number: Number,
    isActive: Boolean,
    isPlaying: Boolean
  });
  const emit = defineEmits([ 'play', 'pause', 'delete' ]);
  const music = ref(getMusicID(props.id));
  const artistsNames = ref([]);
  const durationFormatted = ref('--:--');
  const filePath = ref('');

  function requestMusic() {
    if (props.isActive && props.isPlaying) {
      emit('pause', props.number - 1);
    } else {
      emit('play', props.number - 1, filePath.value);
    }
  }

  watch(
    () => props.id,  
    async () => {
      music.value = getMusicID(props.id);
      artistsNames.value = music.value.artists.map(id => getArtistID(id).name);
      filePath.value = getMusicFile(props.id);
      
      const duration = await getMusicDuration(music.value.id);
      if (!duration) durationFormatted.value = '--:--';

      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);

      durationFormatted.value = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    },
    { immediate: true }
  );
</script>

<template>
  <li>
    <p class="number">{{ props.number }}</p>
    
    <button class="music-btn" @click="requestMusic">
      <img 
        :src="props.isActive && props.isPlaying 
          ? '/icon_pause.svg' 
          : '/icon_play.svg'" 
        alt="Ícone de Tocar ou Pausar a Música"
      />
    </button>

    <RouterLink :to="`/song/music/${props.id}`" class="identifiers">
      <p class="identifiers-title">{{ music.title }}</p>
      <p class="identifiers-authors">{{ artistsNames.join(', ') }}</p>
    </RouterLink>

    <button class="delete-music-btn" @click="$emit('delete', props.number)">
      <img src="/icon_close.svg" alt="Ícone de Remover a Música">
    </button>

    <p class="duration">{{ durationFormatted }}</p>
  </li>
</template>

<style scoped>
  li {
    display: grid;
    grid-template-columns: 2rem 1fr auto 4rem;
    align-items: center;
    gap: 1rem;
    padding-block: .3rem;
    border-radius: .3rem;
    transition: background-color .3s ease;
  }

  li:hover {
    background-color: var(--bg-color-4);
  }

  li p {
    color: var(--fg-color-1);
  }

  li button {
    background-color: transparent;
    cursor: pointer;
  }

  .music-btn {
    display: none;
    justify-self: end;
  }

  .music-btn img {
    height: 1rem;
    transition: scale .3s ease;
  }

  .music-btn:hover img {
    scale: 1.2;
  }

  li:hover .number {
    display: none;
  }

  li:hover .music-btn {
    display: block;
  }

  .identifiers {
    text-decoration: none;
  }

  .identifiers:hover .identifiers-title {
    text-decoration: underline;
  }

  .identifiers-title, .number {
    font-size: 1.25rem;
    justify-self: end;
  }

  .identifiers-authors {
    color: var(--fg-color-2);
  }

  li .delete-music-btn {
    display: block;
  }

  li .delete-music-btn img {
    height: .8rem;
    opacity: 0;
    transition: filter .3s ease, opacity .3s ease, scale .3s ease;
  }

  li:hover .delete-music-btn img {
    opacity: 1;
  }

  li .delete-music-btn:hover img {
    scale: 1.2;
    filter: brightness(0) saturate(100%) invert(100%) sepia(62%) saturate(312%) hue-rotate(191deg) brightness(115%) contrast(88%);
  }

  .duration {
    color: var(--fg-color-2);
    justify-self: center;
  }
</style>