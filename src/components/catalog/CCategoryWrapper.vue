<template>
  <div class="category-wrapper">
    <slot />
  </div>
</template>
<style scoped>
@reference '@/assets/main.css';

.category-wrapper {
  @apply w-full h-full overflow-y-auto;
  @apply flex flex-row justify-center flex-wrap gap-4;
}
</style>
