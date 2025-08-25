<template>
  <div class="campaign-slider">
    <div ref="content" class="slider-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { isVisibleInViewport } from '@/services/client/utility'

export default {
  props: {
    interval: {
      type: Number,
      default: 4000
    }
  },
  data() {
    return {
      intervalFollower: 0,
    }
  },
  methods: {
    toNext() {
      const content = this.$refs.content as HTMLElement
      const slides = [...content.children]
      const slideIndex = slides.findIndex(s => isVisibleInViewport(s as HTMLElement))
      if (slideIndex != -1) {
        const nextSlide = slideIndex != slides.length - 1 ? slideIndex + 1 : 0
        slides[nextSlide].scrollIntoView({ behavior: "smooth" })
      }
    }
  },
  mounted() {
    if (this.interval > 0) {
      this.intervalFollower = setInterval(this.toNext, this.interval);
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalFollower)
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.campaign-slider {
  @apply flex flex-col gap-1 p-2;
  @apply bg-base-200 h-[44vw];
}

.slider-content {
  @apply carousel w-full gap-2;
}

.slider-content :deep(*) {
  @apply carousel-item;
}
</style>
