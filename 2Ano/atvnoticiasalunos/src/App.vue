<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
  main {
    padding: 1rem;
    border-radius: 0 0 .5rem .5rem;
    margin-bottom: 2rem;
    margin-inline: auto;
    width: min(970px, 100%);
    background-color: #494d50;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
  }
</style>
