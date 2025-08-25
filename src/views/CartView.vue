<template>
  <main>
    <h2>Cart</h2>
    <router-view />
  </main>
</template>

<script lang="ts">
import { useCardStore } from '@/stores/cart';

export default {
  components: {
  },
  data() {
    return {
      cardStore: useCardStore()
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

main {
  @apply flex flex-col flex-nowrap h-full grow;
  @apply overflow-hidden;
}

h2 {
  @apply text-xl font-bold p-4;
}
</style>
