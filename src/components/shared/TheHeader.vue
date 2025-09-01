<template>
  <header>
    <img src="/logo.png" alt="Yerel Market">
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
  @apply flex flex-row justify-center items-center;
  @apply w-full bg-base-300 p-2;
  @apply shrink-0;
}

img {
  @apply h-12
}
</style>
