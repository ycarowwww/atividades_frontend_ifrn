<script setup>
  import { computed, onBeforeUnmount, ref } from 'vue';
  import MusicsHeader from '@/components/MusicsHeader.vue';
  import PlayButton from '@/components/PlayButton.vue';
  import QueueElement from '@/components/QueueElement.vue';
  import VerticalFlexList from '@/components/VerticalFlexList.vue';
  import ControlTime from '@/components/ControlTime.vue';
  import { getMusicFile } from '@/services/musicService';

  const myQueue = ref(loadMusics());

  const currentIndex = ref(null);
  const isPlaying = ref(false);
  const audio = new Audio();
  const currentTime = ref(0);
  const duration = ref(0);
  const isSeeking = ref(false);
  const progressPercent = computed(() => {
    if (!duration.value) return 0;
    return (currentTime.value / duration.value) * 100;
  });
  const controlTime = ref(null);

  function resetMusic() {
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    
    currentIndex.value = null;
    isPlaying.value = false;
    currentTime.value = 0;
    duration.value = 0;
    isSeeking.value = false;
  }

  function removeMusic(index) {
    if (myQueue.value.length <= 0 || index - 1 >= myQueue.value.length) return;
    if (currentIndex.value === index - 1) {
      resetMusic();
    } else if (currentIndex.value > index - 1) {
      currentIndex.value -= 1;
    }

    myQueue.value.splice(index - 1, 1);
    saveMusics(myQueue.value);
  }

  function playMusic(index, path) {
    if (currentIndex.value === index) {
      audio.play();
      isPlaying.value = true;
      return;
    }
    
    currentIndex.value = index;
    isPlaying.value = true;

    audio.src = path;
    audio.load();
    audio.play();
  }

  function pauseMusic(index) {
    if (currentIndex.value !== index) return;

    isPlaying.value = false;
    audio.pause();
  }

  function seek(event) {
    if (!duration.value) return;

    const rect = controlTime.value.controlDiv.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percent = Math.min(clickX / rect.width, 1);

    audio.currentTime = percent * duration.value;
    currentTime.value = audio.currentTime;
  }

  function startSeek(event) {
    isSeeking.value = true;
    seek(event);

    window.addEventListener('mousemove', seek);
    window.addEventListener('mouseup', stopSeek);
  }

  function stopSeek() {
    isSeeking.value = false;

    window.removeEventListener('mousemove', seek);
    window.removeEventListener('mouseup', stopSeek);
  }

  function playButtonEvent() {
    if (myQueue.value.length <= 0) return;
    if (isPlaying.value) {
      pauseMusic(currentIndex.value);
    } else {
      if (currentIndex.value !== null) {
        playMusic(currentIndex.value, getMusicFile(myQueue.value[currentIndex.value]));
      } else {
        playMusic(0, getMusicFile(myQueue.value[0]));
      }
    }
  }

  function formatDuration() {
    const currDuration = audio.currentTime;
    const totalDuration = audio.duration;

    if (isNaN(totalDuration)) return '--:-- / --:--';

    const currMinutes = Math.floor(currDuration / 60);
    const currSeconds = Math.floor(currDuration % 60);
    const currText = `${String(currMinutes).padStart(2, '0')}:${String(currSeconds).padStart(2, '0')}`;
    const totalMinutes = Math.floor(totalDuration / 60);
    const totalSeconds = Math.floor(totalDuration % 60);
    const totalText = `${String(totalMinutes).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}`;

    return `${currText} / ${totalText}`;
  }

  function saveMusics(musicsIDs) {
    localStorage.setItem('musics', JSON.stringify(musicsIDs));
  }

  function loadMusics() {
    if (localStorage.getItem('musics')) return JSON.parse(localStorage.getItem('musics'));
    return [];
  }

  audio.addEventListener('loadedmetadata', () => {
    duration.value = audio.duration;
  });

  audio.addEventListener('timeupdate', () => {
    if (!isSeeking.value) {
      currentTime.value = audio.currentTime;
    }
  });

  audio.addEventListener('ended', () => {
    if (currentIndex.value + 1 >= myQueue.value.length) {
      resetMusic();
    } else {
      playMusic(currentIndex.value + 1, getMusicFile(myQueue.value[currentIndex.value + 1]));
    }
  });

  onBeforeUnmount(() => {
    resetMusic();
  });
</script>

<template>
  <h2>Sua Fila</h2>

  <section>
    <div class="control-buttons">
      <PlayButton :is-paused="isPlaying" @click="playButtonEvent" />
      <p class="counter">{{ formatDuration() }}</p>
    </div>

    <ControlTime v-show="currentIndex !== null" ref="controlTime" :width="progressPercent" @click="seek" @mousedown="startSeek"  />

    <MusicsHeader class="musics-header" />
    <VerticalFlexList>
      <QueueElement 
        v-for="(el, i) in myQueue" 
        :key="el"
        :id="el" 
        :number="i + 1" 
        :is-active="currentIndex === i"
        :is-playing="isPlaying"
        @play="playMusic"
        @pause="pauseMusic"
        @delete="removeMusic"
      />
    </VerticalFlexList>
  </section>
</template>

<style scoped>
  h2 {
    color: var(--fg-color-1);
    text-align: center;
    font-size: 2rem;
    margin-block: 2rem;
  }

  section {
    max-width: 940px;
    margin-inline: auto;
  }

  .control-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .counter {
    color: var(--fg-color-2);
    font-size: 1.25rem;
  }

  .musics-header {
    margin-top: 1rem;
  }
</style>