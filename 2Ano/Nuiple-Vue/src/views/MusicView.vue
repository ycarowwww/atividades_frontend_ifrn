<script setup>
  import { ref, computed, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import ListElement1 from '@/components/ListElement1.vue';
  import ListElement2 from '@/components/ListElement2.vue';
  import ListSlide from '@/components/ListSlide.vue';
  import MainResultMusic from '@/components/MainResultMusic.vue';
  import MusicsHeader from '@/components/MusicsHeader.vue';
  import MusicSearchElement from '@/components/MusicSearchElement.vue';
  import { getAlbumArtists, getAlbumID, getAlbumImg, getArtistID, getArtistImage, getMusicImg, searchAlbums, searchArtists, searchMusics } from '@/services/musicService';

  const route = useRoute();
  const search = computed(() => route.query.search ?? '');
  const pages = [
    { id: 0, label: 'Todos' },
    { id: 1, label: 'Músicas' },
    { id: 2, label: 'Álbuns' },
    { id: 3, label: 'Artistas' }
  ];
  const currentPageID = ref(0);
  const musicsFound = ref([]);
  const albumsFound = ref([]);
  const artistsFound = ref([]);
  const foundSomething = ref(false);

  watch(
    () => search.value,
    () => {
      musicsFound.value = searchMusics(search.value);
      albumsFound.value = searchAlbums(search.value);
      artistsFound.value = searchArtists(search.value);
      foundSomething.value = musicsFound.value.length > 0 || albumsFound.value.length > 0 || artistsFound.value.length > 0;
    },
    { immediate: true }
  );
</script>

<template>
  <ul v-if="foundSomething" class="options">
    <li v-for="page in pages" :key="page.id">
      <button
        :class="{ 'current-page': currentPageID === page.id }"
        @click="currentPageID = page.id"
      >{{ page.label }}</button>
    </li>
  </ul>
  <p v-else class="any-result">Nenhum Resultado Encontrado!</p>

  <div v-if="currentPageID === 0" class="page all-page">
    <section v-if="musicsFound.length > 0" class="music-results">
      <div class="main-result">
        <h2>Resultado Principal</h2>

        <MainResultMusic 
          :id="musicsFound[0].id" 
          :title="musicsFound[0].title" 
          :artists="musicsFound[0].artists" 
          :genres="musicsFound[0].genres"  
          :imgPath="getMusicImg(musicsFound[0].id)" 
          class="main-result-tag" 
        />
      </div>
      <div v-if="musicsFound.length > 1" class="other-musics">
        <h2>Músicas</h2>

        <MusicSearchElement 
          v-for="i in Math.min(musicsFound.length - 1, 3)" 
          :id="musicsFound[i].id" 
          :title="musicsFound[i].title" 
          :artists="musicsFound[i].artists.map(id => getArtistID(id).name)" 
          :imgPath="getMusicImg(musicsFound[i].id)"
        />
      </div>
    </section>

    <section v-if="albumsFound.length > 0" class="albums-list">
      <h2>Álbuns</h2>

      <ListSlide>
        <ListElement1 
          v-for="album in albumsFound" 
          :key="`album_${album.id}`"
          :id="album.id" 
          :imgPath="`${getAlbumImg(album.id)}`" 
          :title="album.name" 
          :artistsIDs="getAlbumArtists(album.id)" 
          :type="'album'" 
          max-width="150px" 
        />
      </ListSlide>
    </section>

    <section v-if="artistsFound.length > 0" class="artists-list">
      <h2>Artistas</h2>

      <ListSlide>
        <ListElement2
          v-for="artist in artistsFound"
          :id="artist.id"
          :title="artist.name"
          :imgPath="getArtistImage(artist.id)"
          max-width="150px" 
        />
      </ListSlide>
    </section>
  </div>
  <div v-else-if="currentPageID === 1" class="page">
    <MusicsHeader hasAlbum />
    <MusicSearchElement 
      v-for="(music, i) in musicsFound" 
      :key="music.id" 
      :id="music.id"
      :number="i+1"
      :title="music.title"
      :artists="music.artists.map(art => getArtistID(art).name)"
      :album="getAlbumID(music.album).name"
      :imgPath="getMusicImg(music.id)"
    />
  </div>
  <div v-else-if="currentPageID === 2" class="page">
    <div class="multiline-list">
      <ListElement1 
        v-for="album in albumsFound" 
        :key="`album_${album.id}`"
        :id="album.id" 
        :imgPath="`${getAlbumImg(album.id)}`" 
        :title="album.name" 
        :artistsIDs="getAlbumArtists(album.id)" 
        :type="'album'" 
        max-width="150px" 
      />
    </div>
  </div>
  <div v-else-if="currentPageID === 3" class="page">
    <div class="multiline-list">
      <ListElement2
        v-for="artist in artistsFound"
        :id="artist.id"
        :title="artist.name"
        :imgPath="getArtistImage(artist.id)"
        max-width="150px" 
      />
    </div>
  </div>
</template>

<style scoped>
  .options {
    width: min(100%, 940px);
    margin-inline: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    margin-block: 2rem;
  }

  .options li {
    display: block;
  }

  .options li button {
    color: var(--fg-color-1);
    font-size: 1.25rem;
    padding: .3rem 1rem;
    border-radius: 99rem;
    background-color: var(--bg-color-3);
    box-shadow: 0 0 2px var(--shadow);
    transition: color .3s ease, background-color .3s ease;
    cursor: pointer;
  }

  .options li button:hover, .options li button.current-page {
    color: var(--bg-color-3);
    background-color: var(--fg-color-1);
  }

  .options li button.current-page {
    cursor: auto;
  }

  .any-result {
    color: var(--fg-color-1);
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-top: 3rem;
  }

  .page {
    color: var(--fg-color-1);
    width: min(100%, 940px);
    margin-inline: auto;
  }

  .all-page section {
    margin-bottom: 2rem;
  }

  .music-results {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .music-results h2 {
    font-size: 2rem;
    margin-bottom: .5rem;
  }

  .music-results div {
    display: flex;
    flex-direction: column;
  }

  .main-result-tag {
    flex-grow: 1;
  }

  .main-result {
    width: 100%;
  }

  .albums-list h2, .artists-list h2 {
    font-size: 2rem;
  }

  .multiline-list {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    gap: 1rem;
    flex-wrap: wrap;
  }
</style>
