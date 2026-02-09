<script setup>
  const props = defineProps({
    gap: {
      type: String,
      required: false,
      default: ".3rem"
    }
  });
</script>

<template>
  <ul :style="{ gap: props.gap }">
    <slot></slot>
  </ul>
</template>

<style scoped>
  ul {
    display: flex;
    flex-direction: column;
  }
</style>