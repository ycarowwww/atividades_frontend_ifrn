<template>
  <button>
    <img src="/icon_add.svg" alt="Ícone de Adicionar">
  </button>
</template>

<style scoped>
  button {
    height: 1.75rem;
    aspect-ratio: 1 / 1;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
  }

  button:hover img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(62%) saturate(312%) hue-rotate(191deg) brightness(115%) contrast(88%);
  }

  img {
    width: 100%;
    height: 100%;
    transition: filter .3s ease;
  }
</style>