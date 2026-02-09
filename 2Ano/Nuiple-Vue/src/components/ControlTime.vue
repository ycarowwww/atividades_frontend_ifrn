<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    width: Number
  });
  const controlDiv = ref(null);

  defineExpose({
    controlDiv
  });
</script>

<template>
  <div ref="controlDiv" class="control-time">
    <div class="time-passed" :style="{ width: `${props.width}%` }" ></div>
  </div>
</template>

<style scoped>
  .control-time {
    display: block;
    width: 100%;
    height: 7px;
    border-radius: 7px;
    background-color: var(--bg-color-3);
    box-shadow: 0 0 2px var(--shadow);
    transition: background-color .3s ease;
    cursor: pointer;
  }

  .time-passed {
    position: relative;
    height: 100%;
    border-radius: 7px;
    background-color: var(--highlight-color);
  }

  .time-passed::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    width: 20px;
    aspect-ratio: 1 / 1;
    border: 2px solid var(--fg-color-1);
    border-radius: 50%;
    background-color: var(--highlight-color);
    box-shadow: 0 0 2px var(--shadow);
  }

  .control-time:hover {
    background-color: var(--bg-color-4);
  }
</style>