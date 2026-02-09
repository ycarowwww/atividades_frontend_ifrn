<script setup>
import { getArtistID, getMusicDuration } from '@/services/musicService';
import { computed, ref, watch } from 'vue';

  const props = defineProps({
    id: Number,
    title: String,
    artists: Array,
    genres: Array,
    imgPath: String
  });
  const artistsNames = computed(() => props.artists.map(art => getArtistID(art).name));
  const duration = ref('--:--');

  watch(
    () => props.id,
    async () => {
      const time = await getMusicDuration(props.id);
      if (!time) return;

      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);

      duration.value = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 
    { immediate: true }
  );
</script>

<template>
  <RouterLink :to="`/song/music/${props.id}`" class="container">
    <div class="title">
      <img :src="`/${props.imgPath}`" alt="Capa do Álbum" class="image">
      
      <h3>{{ props.title }}</h3>
    </div>

    <p>{{ artistsNames.join(', ') }}</p>
    <p>{{ props.genres.join(', ') }}</p>
    <p>{{ duration }}</p>
  </RouterLink>
</template>

<style scoped>
  .container {
    display: block;
    width: 100%;
    text-decoration: none;
    padding: .5rem;
    border-radius: .5rem;
    background-color: var(--bg-color-3);
    box-shadow: 0 0 2px var(--shadow);
    transition: background-color .3s ease;
  }

  .container:hover {
    background-color: var(--bg-color-4);
  }

  .container:hover h3 {
    text-decoration: underline;
  }

  .title {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1rem;
    margin-bottom: .5rem;
  }

  .title h3 {
    color: var(--fg-color-1);
    font-size: 2rem;
  }
  
  .title .image {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: .5rem;
    box-shadow: 0 0 2px var(--shadow);
  }

  p {
    color: var(--fg-color-2);
    margin-top: .3rem;
  }
</style>
