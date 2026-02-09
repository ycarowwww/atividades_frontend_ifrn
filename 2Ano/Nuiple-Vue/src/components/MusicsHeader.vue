<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    hasAlbum: {
      type: Boolean,
      required: false,
      default: false
    }
  });
  const columnsCSS = ref('2rem 1fr 4rem');
  if (props.hasAlbum) columnsCSS.value = '2rem 2fr 1fr 4rem';
</script>

<template>
  <div :style="{ 'grid-template-columns': columnsCSS }">
    <p class="number">#</p>
    <p class="title">Título</p>
    <p class="album" v-if="props.hasAlbum">Álbum</p>
    <p class="icon-clock"><img src="/icon_clock.svg" alt="Ícone de um Relógio"></p>
  </div>
</template>

<style scoped>
  div {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    color: var(--fg-color-2);
  }

  div::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 7px;
    border-radius: 7px;
    background-color: var(--bg-color-3);
    box-shadow: 0 0 2px var(--shadow);
  }

  .number {
    justify-self: end;
  }

  .icon-clock {
    justify-self: center;
  }

  .icon-clock img {
    display: block;
    height: 1rem;
  }
</style>