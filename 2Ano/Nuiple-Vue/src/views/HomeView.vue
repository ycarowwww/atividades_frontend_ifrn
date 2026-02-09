<script setup>
  import Hero from "@/components/Hero.vue";
  import ListSlide from "@/components/ListSlide.vue";
  import ListElement1 from "@/components/ListElement1.vue";
  import { getMusicImg, getRandomMusics } from "@/services/musicService";

  const musics = getRandomMusics(3);
</script>

<template>
  <Hero />
  
  <section class="common-section">
    <h2>Músicas Em Alta</h2>

    <ListSlide>
      <ListElement1 
        v-for="music in musics" 
        :key="music.id" 
        :id="music.id" 
        :title="music.title" 
        :artistsIDs="music.artists" 
        :type="'music'"
        :imgPath="getMusicImg(music.id)"
        max-width="150px" 
      />
    </ListSlide>
  </section>

  <section class="common-section">
    <h2>Filas de Músicas</h2>

    <p>Adicione diversas músicas a sua fila para serem reproduzidas em ordem. As filas são salvas localmente no seu computador, permitindo você reproduzí-la novamente quando voltar ao site.</p>
  </section>

  <section class="common-section">
    <h2>Artista? Contate-nos!</h2>

    <p>Caso você seja um artista, contate-nos pela página de contato para adicionarmos o seu perfil e suas músicas para todos a escutarem e a adicionarem em suas filas.</p>

    <RouterLink to="/contact">Contate-nos</RouterLink>
  </section>
</template>

<style scoped>
  .common-section {
    max-width: 960px;
    margin-top: 2rem;
    margin-inline: auto;
  }

  .common-section h2, .musics-section h2 {
    color: var(--fg-color-1);
    font-size: 2rem;
    text-align: center;
  }

  .common-section p {
    color: var(--fg-color-1);
    font-size: 1.25rem;
    margin-top: .5rem;
  }

  .common-section a {
    display: block;
    color: var(--fg-color-1);
    font-size: 1.25rem;
    text-decoration: none;
    padding: .25rem .45rem;
    border-radius: .45rem;
    margin-top: 1rem;
    margin-inline: auto;
    width: fit-content;
    background-color: var(--highlight-color);
    box-shadow: 0 0 2px var(--shadow);
    transition: background-color .3s ease;
  }

  .common-section a:hover {
    background-color: var(--highlight-color-hover);
  }
</style>