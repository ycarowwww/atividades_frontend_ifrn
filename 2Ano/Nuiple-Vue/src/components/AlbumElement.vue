<script setup>
import { computed, onMounted, ref } from 'vue';
import { getArtistID, getMusicDuration, getMusicID } from '@/services/musicService';

  const props = defineProps({
    id: Number,
    number: Number
  });
  const music = getMusicID(props.id);
  const artistsNames = computed(() => {
    return music.artists.map(id => getArtistID(id))
                           .filter(artist => artist)
                           .map(artist => artist.name);
  });
  const durationFormatted = ref('--:--');

  onMounted(async () => {
    const duration = await getMusicDuration(props.id);
    if (!duration) return;

    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);

    durationFormatted.value = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  });
</script>

<template>
  <li>
    <RouterLink :to="`/song/music/${props.id}`">
      <p class="number">{{ props.number }}</p>

      <div class="identifiers">
        <p class="identifiers-title">{{ music.title }}</p>
        <p class="identifiers-authors">{{ artistsNames.join(', ') }}</p>
      </div>

      <p class="duration">{{ durationFormatted }}</p>
    </RouterLink>
  </li>
</template>

<style scoped>
  li {
    display: block;
  }

  li a {
    display: grid;
    grid-template-columns: auto 1fr 4rem;
    align-items: center;
    gap: 1rem;
    padding-block: .3rem;
    border-radius: .3rem;
    transition: background-color .3s ease;
  }

  li a:hover {
    background-color: var(--bg-color-4);
  }

  li a {
    text-decoration: none;
  }

  li p {
    color: var(--fg-color-1);
  }

  .number {
    padding-left: 1rem;
  }

  .identifiers-title, .number {
    font-size: 1.25rem;
  }

  .identifiers {
    flex-grow: 1;
  }

  .identifiers-authors {
    color: var(--fg-color-2);
  }

  .duration {
    color: var(--fg-color-2);
    justify-self: center;
  }
</style>
