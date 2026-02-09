<script setup>
  import { onMounted, ref } from 'vue';
  import { getMusicDuration } from '@/services/musicService';

  const props = defineProps({
    id: Number,
    number: {
      type: Number,
      required: false
    },
    title: String,
    artists: Array,
    album: {
      type: String,
      required: false
    },
    imgPath: String
  });
  const paddingLeft = ref('0rem');
  const columnsSize = ref('auto');
  const duration = ref('--:--');

  if (props.number != null) {
    columnsSize.value = '2rem 2fr 1fr 4rem';
  } else {
    columnsSize.value = '1fr 4rem';
    paddingLeft.value = '.3rem';
  }

  onMounted(async () => {
    const time = await getMusicDuration(props.id);
    if (!time) return;

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    duration.value = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  });
</script>

<template>
  <RouterLink :to="`/song/music/${props.id}`" :style="{ 'grid-template-columns': columnsSize, 'padding-left': paddingLeft }">
    <p v-if="props.number != null" class="number">{{ props.number }}</p>

    <div class="title-part">
      <img :src="`/${props.imgPath}`" alt="Capa do Álbum" class="image">

      <div class="text">
        <p class="title">{{ props.title }}</p>
        <p class="authors">{{ props.artists.join(', ') }}</p>
      </div>
    </div>

    <p v-if="props.album != null" class="album">{{ props.album }}</p>

    <p v-if="duration" class="time">{{ duration }}</p>
  </RouterLink>
</template>

<style scoped>
  a {
    display: grid;
    align-items: center;
    gap: 1rem;
    color: var(--fg-color-1);
    text-decoration: none;
    padding-block: .3rem;
    border-radius: .3rem;
    transition: background-color .3s ease;
  }

  a:hover {
    background-color: var(--bg-color-4);
  }

  a:hover .title {
    text-decoration: underline;
  }
  
  .number {
    justify-self: end;
  }

  .image {
    height: 2.5rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: .3rem;
    box-shadow: 0 0 2px var(--shadow);
  }

  .title-part {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: .5rem;
  }

  .title {
    font-size: 1.25rem;
  }

  .authors {
    color: var(--fg-color-2);
  }

  .time {
    color: var(--fg-color-2);
    justify-self: center;
  }
</style>