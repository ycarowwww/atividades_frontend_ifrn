<script setup>
  const props = defineProps({
    imageSRC: String,
    imgAlt: String,
    href: String
  });
</script>

<template>
  <a :href="props.href" target="_blank"><img :src="props.imageSRC" :alt="props.imgAlt"></a>
</template>

<style scoped>
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--fg-color-1);
    text-decoration: none;
    width: 2.5rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: var(--bg-color-3);
    box-shadow: 0 0 2px var(--shadow);
    transition: background-color .3s ease;
  }

  a:hover {
    background-color: var(--fg-color-2);
  }

  a img {
    width: 1.25rem;
  }
</style>