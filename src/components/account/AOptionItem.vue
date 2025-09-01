<template>
  <RouterLink class="account-oprion" :to="to">
    <span>{{ label }}</span>
  </RouterLink>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { RouterLink, type RouteLocationRaw } from 'vue-router';

export default {
  components: { RouterLink, },
  emits: ["click"],
  props: {
    label: String,
    to: {
      type: Object as PropType<RouteLocationRaw>,
      required: true
    }
  }
}
</script>
<style scoped>
@reference '@/assets/main.css';

.account-oprion {
  @apply block;
  @apply bg-base-200 p-2;
}
</style>
