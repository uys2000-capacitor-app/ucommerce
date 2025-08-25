<template>
  <div class="cproduct-slider">
    <div class="slider-title">
      <slot name="title" />
    </div>
    <div class="slider-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>
<style scoped>
@reference '@/assets/main.css';

.cproduct-slider {
  @apply flex flex-col gap-1 p-2;
  @apply bg-base-200;
}

.slider-title {
  @apply font-bold text-xl capitalize;
}

.slider-content {
  @apply carousel w-full gap-2;
}

.slider-content :deep(*) {
  @apply carousel-item;
}
</style>
