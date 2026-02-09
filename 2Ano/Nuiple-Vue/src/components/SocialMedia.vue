<script setup>
  import SocialButton from './SocialButton.vue';
</script>

<template>
  <ul>
    <li><SocialButton :href="'https://www.facebook.com/'" :imageSRC="'/icon_facebook.svg'" :img-alt="'Ícone do Facebook'" /></li>
    <li><SocialButton :href="'https://x.com/'" :imageSRC="'/icon_twitter.svg'" :img-alt="'Ícone do Twitter'" /></li>
    <li><SocialButton :href="'https://www.instagram.com/'" :imageSRC="'/icon_instagram.svg'" :img-alt="'Ícone do Instagram'" /></li>
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