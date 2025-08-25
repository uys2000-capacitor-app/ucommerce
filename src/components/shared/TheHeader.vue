<template>
  <header>
    <h1>App Title</h1>
  </header>
</template>

<script lang="ts">

export default {
  components: {
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

header {
  @apply flex flex-row justify-center;
  @apply w-full bg-base-300 p-4;
  @apply shrink-0;
}
</style>
