<template>
  <div :id="`subcategory-${subCategory?.id}`">
    <h3 :id="`subcategory-title-${subCategory?.id}`">{{ subCategory?.name }}</h3>
    <div class="subcategory-items">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { isVisibleInViewportListener } from '@/services/client/utility';
import type { UCategoryInfo } from '@/types/catalog';
import type { PropType } from 'vue';

export default {
  props: {
    subCategory: {
      type: Object as PropType<UCategoryInfo>,
    }
  },
  methods: {
    observe() {
      const title = document.querySelector(`#subcategory-${this.subCategory?.id}`) as HTMLElement
      try {

        isVisibleInViewportListener(title, () => {
          this.$router.push({
            name: "SubCategoryView",
            params: {
              subcategoryid: this.subCategory?.id,
              subcategory: this.subCategory?.seeName
            }
          })
        })
      } catch { }
    },
  },
  computed: {
    subcategoryId() {
      return (this.$route.params.subcategoryid ?? "0") as string
    }
  },
  mounted() {
    this.observe()
  },
}
</script>

<style scoped>
@reference '@/assets/main.css';

.subcategory {
  @apply w-full h-max;
}

.subcategory-items {
  @apply w-full;
  @apply flex flex-row flex-wrap justify-around gap-2;
}
</style>
