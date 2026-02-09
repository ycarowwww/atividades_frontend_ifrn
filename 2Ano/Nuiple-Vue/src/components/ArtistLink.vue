<script setup>
  import { getArtistID } from '@/services/musicService';
  import { computed } from 'vue';

  const props = defineProps({
    id: Number,
    imageSRC: String
  });
  const artist = computed(() => {
    return getArtistID(props.id);
  });
</script>

<template>
  <RouterLink :to="`/artist/${id}`">
    <div class="image">
      <img :src="`/${props.imageSRC}`" alt="Foto de Perfil do Artista">
    </div>

    <p>{{ artist.name }}</p>
  </RouterLink>
</template>

<style scoped>
  a {
    color: var(--fg-color-1);
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    width: 100%;
    padding: .3rem;
    border-radius: .3rem;
    transition: background-color .3s ease;
  }

  a:hover {
    background-color: var(--bg-color-4);
  }

  a:hover p {
    text-decoration: underline;
  }

  .image {
    position: relative;
    height: 2rem;
    aspect-ratio: 1 / 1;
  }

  .image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 2px var(--shadow);
  }

  p {
    font-size: 1.25rem;
  }
</style>