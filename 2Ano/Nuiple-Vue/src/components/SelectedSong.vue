<script setup>
  import { computed } from 'vue';
  import ArtistLink from './ArtistLink.vue';
  import SocialPlatforms from './SocialPlatforms.vue';
import { getArtistImage } from '@/services/musicService';

  const props = defineProps({
    year: Number,
    time: Number,
    genres: Array,
    type: String,
    title: String,
    artistID: Number,
    platforms: Object,
    imageSRC: String
  });
  const durationFormatted = computed(() => {
    if (!props.time) return '--:--';

    const minutes = Math.floor(props.time / 60);
    const seconds = Math.floor(props.time % 60);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  });
</script>

<template>
  <div class="container">
    <div class="image">
      <img :src="`/${props.imageSRC}`" alt="Capa do Álbum">
    </div>

    <div class="data">
      <p>{{ props.year }} | {{ durationFormatted }}</p>
      <p>{{ props.genres.join(', ') }}</p>
      <h3>{{ props.type }}</h3>
      <h2>{{ props.title }}</h2>
      <ArtistLink :id="props.artistID" :imageSRC="getArtistImage(props.artistID)" />
      <SocialPlatforms class="social-platforms" :spotify="props.platforms.spotify" :youtube="props.platforms.youtube" :apple-music="props.platforms.apple_music" />
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }

  .image {
    position: relative;
    height: 100%;
    aspect-ratio: 1 / 1;
  }

  .image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .5rem;
    box-shadow: 0 0 2px var(--shadow);
  }

  p {
    color: var(--fg-color-2);
  }

  h2, h3 {
    color: var(--fg-color-1);
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  .data > * + * {
    margin-top: .5rem;
  }

  .social-platforms {
    justify-content: flex-start;
  }
</style>