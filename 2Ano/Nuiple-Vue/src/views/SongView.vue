<script setup>
  import { reactive, ref, watch } from 'vue';
  import AddButton from '@/components/AddButton.vue';
  import ArtistLink from '@/components/ArtistLink.vue';
  import MusicsHeader from '@/components/MusicsHeader.vue';
  import VerticalFlexList from '@/components/VerticalFlexList.vue';
  import SelectedSong from '@/components/SelectedSong.vue';
  import { getAlbumArtists, getAlbumGenres, getAlbumID, getAlbumImg, getAlbumTotalDuration, getArtistImage, getMusicDuration, getMusicID, getMusicImg, getMusicsFromAlbum } from '@/services/musicService';
  import AlbumElement from '@/components/AlbumElement.vue';

  const props = defineProps({
    'id': String,
    'type': String
  });
  const song = reactive({
    year: null,
    time: null,
    genres: null,
    type: null,
    title: null,
    platforms: null,
    imageSRC: null
  });
  const artistsIDs = ref([]);
  const musics = ref([]);
  const allDataLoaded = ref(false);

  function addMusics(musicsIDs) {
    let savedMusics = [];
    if (localStorage.getItem('musics')) savedMusics = JSON.parse(localStorage.getItem('musics'));

    savedMusics = [...savedMusics, ...musicsIDs];
    localStorage.setItem('musics', JSON.stringify(savedMusics));
  }

  watch(
    () => props.type + props.id, 
    async () => {
      const songID = Number(props.id);

      if (props.type === 'music') {
        const music = getMusicID(songID);

        song.year = music.year;
        song.time = await getMusicDuration(songID);
        song.genres = music.genres;
        song.type = "Música";
        song.title = music.title;
        artistsIDs.value = music.artists;
        song.platforms = music.platforms;
        musics.value = [ music ];
        song.imageSRC = getMusicImg(songID);
      } else {
        const album = getAlbumID(songID);

        song.year = album.year;
        song.time = await getAlbumTotalDuration(songID);
        song.genres = getAlbumGenres(songID);
        song.type = "Álbum";
        song.title = album.name;
        artistsIDs.value = getAlbumArtists(songID);
        song.platforms = album.platforms;
        musics.value = getMusicsFromAlbum(songID);
        song.imageSRC = getAlbumImg(songID);
      }

      allDataLoaded.value = true;
    }, 
    { immediate: true }
  );
</script>

<template>
  <section>
    <SelectedSong v-if="allDataLoaded" v-bind="song" :artistID="artistsIDs[0]" />
  </section>
  
  <section>
    <AddButton v-if="musics.length > 0" class="add-button" @click="addMusics(musics.map(v => v.id))" />

    <MusicsHeader />
    <VerticalFlexList>
      <AlbumElement v-if="allDataLoaded" v-for="(music, i) in musics" :id="music.id" :number="i+1" :key="music.id" />
    </VerticalFlexList>
  </section>

  <section>
    <h2>Artistas</h2>

    <ArtistLink v-if="allDataLoaded" v-for="artistID in artistsIDs" :id="artistID" :imageSRC="getArtistImage(artistID)" />
  </section>
</template>

<style scoped>
  section {
    max-width: 960px;
    margin-top: 2rem;
    margin-inline: auto;
  }

  .add-button {
    margin-bottom: 1rem;
  }

  section h2 {
    color: var(--fg-color-1);
    font-size: 2rem;
    margin-bottom: .5rem;
  }
</style>