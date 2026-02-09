<script setup>
  const props = defineProps({
    id: Number,
    imgPath: String,
    title: String,
    maxWidth: String
  });
</script>

<template>
  <li :style="{ flex: `0 0 ${maxWidth}` }">
    <RouterLink :to="`/artist/${props.id}`">
      <img :src="`/${props.imgPath}`" alt="Capa do Álbum" class="image">
      <h3>{{ props.title }}</h3>
    </RouterLink>
  </li>
</template>

<style scoped>
  li {
    padding: .5rem;
    border-radius: .5rem;
    background-color: var(--bg-color-3);
    box-shadow: 0 0 2px var(--shadow);
    transition: background-color .3s ease;
    cursor: pointer;
  }

  li:hover {
    background-color: var(--bg-color-4);
  }

  li a {
    display: block;
    text-decoration: none;
  }

  .image {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    box-shadow: 0 0 2px var(--shadow);
  }

  h3 {
    color: var(--fg-color-1);
    font-size: 1.25rem;
    margin-top: .5rem;
  }
</style>