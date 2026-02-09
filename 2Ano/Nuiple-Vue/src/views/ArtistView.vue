<script setup>
  import { computed } from 'vue';
  import AddButton from '@/components/AddButton.vue';
  import ListElement1 from '@/components/ListElement1.vue';
  import ListSlide from '@/components/ListSlide.vue';
  import MusicsHeader from '@/components/MusicsHeader.vue';
  import AlbumElement from '@/components/AlbumElement.vue';
  import VerticalFlexList from '@/components/VerticalFlexList.vue';
  import SelectedArtist from '@/components/SelectedArtist.vue';
  import { getAlbumsFromArtist, getArtistID, getMusicsFromArtist, getAlbumArtists, getAlbumImg, getArtistImage } from '@/services/musicService';

  const props = defineProps({
    id: String
  });
  const artist = computed(() => {
    return getArtistID(Number(props.id)) ?? null;
  });
  const musics = getMusicsFromArtist(Number(props.id));
  const albums = getAlbumsFromArtist(Number(props.id));

  function addMusics(musicsIDs) {
    let savedMusics = [];
    if (localStorage.getItem('musics')) savedMusics = JSON.parse(localStorage.getItem('musics'));

    savedMusics = [...savedMusics, ...musicsIDs];
    localStorage.setItem('musics', JSON.stringify(savedMusics));
  }
</script>

<template>
  <section>
    <SelectedArtist 
      :title="artist.name"
      :platforms="artist.platforms"
      :imageSRC="getArtistImage(artist.id)"
    />
  </section>
  
  <section>
    <h2>Músicas</h2>
    
    <AddButton v-if="musics.length > 0" class="add-button" @click="addMusics(musics.map(v => v.id))" />

    <MusicsHeader />
    <VerticalFlexList>
      <AlbumElement v-for="(music, i) in musics" :id="music.id" :number="i+1" :key="music.id" />
    </VerticalFlexList>
  </section>

  <section>
    <h2>Álbuns</h2>

    <ListSlide>
      <ListElement1 
        v-for="album in albums" 
        :key="album.id" 
        :id="album.id" 
        :title="album.name" 
        :artistsIDs="getAlbumArtists(album.id)" 
        :type="'album'"
        :imgPath="getAlbumImg(album.id)"
        max-width="150px" 
      />
    </ListSlide>
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