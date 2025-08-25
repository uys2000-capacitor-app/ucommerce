<template>
  <RouterLink :to="{ name: 'CategoryView', params: { category: category.seeName, categoryid: category.id } }"
    class="category-box">
    <img class="category-img" :src="category.thumbnail" :alt="`Image of ${category.name}`">
    <span class="category-name">{{ category.name }}</span>
  </RouterLink>
</template>
<script lang="ts">
import type { UCategoryInfo } from '@/types/catalog';
import type { PropType } from 'vue';

export default {
  props: {
    category: {
      type: Object as PropType<UCategoryInfo>,
      required: true
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.category-box {
  @apply block relative size-24;
}

.category-name {
  @apply text-base-content bg-base-100/40;
  @apply w-full text-nowrap overflow-ellipsis overflow-hidden;
  @apply absolute top-0 left-0;
}

.category-img {
  @apply relative size-24;
}
</style>
