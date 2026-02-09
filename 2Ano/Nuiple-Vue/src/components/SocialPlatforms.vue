<script setup>
  import SocialButton from './SocialButton.vue';

  const props = defineProps({
    spotify: String,
    appleMusic: String,
    youtube: String
  });
</script>

<template>
  <ul>
    <li v-if="props.spotify"><SocialButton :href="props.spotify" :imageSRC="'/icon_spotify.svg'" :img-alt="'Ícone do Spotify'" /></li>
    <li v-if="props.appleMusic"><SocialButton :href="props.appleMusic" :imageSRC="'/icon_applemusic.svg'" :img-alt="'Ícone do Apple Music'" /></li>
    <li v-if="props.youtube"><SocialButton :href="props.youtube" :imageSRC="'/icon_youtube.svg'" :img-alt="'Ícone do Youtube'" /></li>
  </ul>
</template>

<style scoped>
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
</style>