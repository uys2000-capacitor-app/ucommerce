<template>
  <div class="product-images carousel" ref="carousel">\
    <template v-for="image, index in images" :key="index">
      <div :id="`product-image-${index}`" class="carousel-item">
        <img :src="image" :alt="`product image ${index + 1}`" />
        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a class="btn bg-neutral/40 border-neutral/10 text-neutral-content btn-circle"
            @click="() => toBefore(index)">❮</a>
          <a class="btn bg-neutral/40 border-neutral/10 text-neutral-content btn-circle"
            @click="() => toNext(index)">❯</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';

export default {
  props: {
    images: {
      type: Array as PropType<Array<string>>,
      default: () => []
    }
  },
  methods: {
    toBefore(index: number) {
      const i = index == 0 ? this.images.length - 1 : index - 1
      const target = document.querySelector(`#product-image-${i}`) as HTMLElement
      target.scrollIntoView({ behavior: "smooth" })
    },
    toNext(index: number) {
      const i = index == this.images.length - 1 ? 0 : index + 1
      const target = document.querySelector(`#product-image-${i}`) as HTMLElement
      target.scrollIntoView({ behavior: "smooth" })
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.product-images {
  @apply rounded-box max-h-72 h-72 max-w-72 w-72 m-auto relative;
}

.carousel-item {
  @apply w-full relative;
}

img {
  @apply w-full;
}
</style>
