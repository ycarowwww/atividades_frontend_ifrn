<script setup>
  import { getArtistID } from '@/services/musicService';
  import { computed } from 'vue';
  import { RouterLink } from 'vue-router';

  const props = defineProps({
    id: Number,
    imgPath: String,
    title: String,
    artistsIDs: Array,
    maxWidth: String,
    type: String
  });
  const artistsNames = computed(() => {
    return props.artistsIDs.map(id => getArtistID(id))
                           .filter(artist => artist)
                           .map(artist => artist.name);
  });
</script>

<template>
  <li :style="{ flex: `0 0 ${maxWidth}`, 'max-width': `${maxWidth}` }">
    <RouterLink :to="`/song/${props.type}/${props.id}`">
      <img :src="`/${props.imgPath}`" alt="Capa do Álbum" class="image">
      <h3>{{ props.title }}</h3>
      <p>{{ artistsNames.join(', ') }}</p>
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
    border-radius: .5rem;
    box-shadow: 0 0 2px var(--shadow);
  }

  h3 {
    color: var(--fg-color-1);
    font-size: 1.25rem;
    margin-block: .5rem;
  }

  p {
    color: var(--fg-color-2);
    font-size: 1.1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
  }
</style>