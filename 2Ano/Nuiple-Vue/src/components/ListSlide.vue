<script setup></script>

<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<style scoped>
  ul {
    display: flex;
    justify-content: left;
    align-items: stretch;
    gap: 1rem;
    padding: 1rem;
    overflow-x: auto;
  }
</style>