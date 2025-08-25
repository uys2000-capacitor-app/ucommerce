<template>
  <div class="subcategory-wrapper">
    <h3 id="subcategory-title"></h3>
    <div class="subcategory-items">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  computed: {

  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.subcategory-wrapper {
  @apply w-full h-full overflow-auto shrink;
  @apply flex flex-col gap-1;
}
</style>
