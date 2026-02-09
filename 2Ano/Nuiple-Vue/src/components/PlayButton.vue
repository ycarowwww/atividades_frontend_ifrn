<script setup>
  const props = defineProps({
    isPaused: {
      type: Boolean,
      default: false
    }
  });
</script>

<template>
  <button>
    <img :src="props.isPaused ? '/icon_pause.svg' : '/icon_play.svg'" alt="Símbolo de Tocar Música">
  </button>
</template>

<style scoped>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: var(--highlight-color);
    box-shadow: 0 0 2px var(--shadow);
    transition: background-color .3s ease;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--highlight-color-hover);
  }

  img {
    width: 50%;
    aspect-ratio: 1 / 1;
  }
</style>