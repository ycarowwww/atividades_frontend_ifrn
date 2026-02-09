<script setup>
  import SocialPlatforms from './SocialPlatforms.vue';

  const props = defineProps({
    title: String,
    platforms: Object,
    imageSRC: String
  });
</script>

<template>
  <div class="container">
    <div class="image">
      <img :src="`/${props.imageSRC}`" alt="Foto de Perfil">
    </div>

    <div class="data">
      <h2>{{ props.title }}</h2>
      
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
    border-radius: 50%;
    box-shadow: 0 0 2px var(--shadow);
  }

  h2 {
    font-size: 3rem;
    color: var(--fg-color-1);
    margin-block: 3rem 1.5rem;
  }

  .social-platforms {
    justify-content: flex-start;
  }
</style>