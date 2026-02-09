<script setup></script>

<template>
  <section>
    <h2>Escute Músicas com alguns cliques!</h2>

    <p>O Nuiple é uma plataforma de te permite ouvir músicas sem precisar de login. Você pode criar uma fila de músicas que serão escutadas e salvas localmente.</p>

    <a href="#search-music">Pesquisar Músicas</a>
  </section>
</template>

<style scoped>
  section {
    color: var(--fg-color-1);
    padding: 2rem;
    background: url("background_hero.png") no-repeat center / cover;
    box-shadow: 0 0 2px var(--shadow);
  }

  section h2 {
    font-size: 4rem;
    text-align: center;
    margin-inline: auto;
    margin-bottom: 2rem;
    max-width: 37rem;
  }

  section p {
    font-size: 1.25rem;
    text-align: center;
    margin-inline: auto;
    margin-bottom: 2rem;
    max-width: 55rem;
  }

  section a {
    display: block;
    color: var(--fg-color-1);
    font-size: 1.25rem;
    text-decoration: none;
    padding: .25rem .45rem;
    border-radius: .45rem;
    margin-inline: auto;
    width: fit-content;
    background-color: var(--highlight-color);
    box-shadow: 0 0 2px var(--shadow);
    transition: background-color .3s ease;
  }

  section a:hover {
    background-color: var(--highlight-color-hover);
  }
</style>