<script setup>
  import SocialMedia from './SocialMedia.vue';
</script>

<template>
  <footer>
    <p>Nuiple &copy; Todos os Direitos Reservados</p>

    <SocialMedia />
  </footer>
</template>

<style scoped>
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1.5rem;
    margin-top: 3rem;
    background-color: var(--bg-color-1);
    box-shadow: 0 0 2px var(--shadow);
  }

  footer p {
    color: var(--fg-color-1);
    font-size: 1.25rem;
  }
</style>