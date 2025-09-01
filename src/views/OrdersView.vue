<template>
  <main>
    <template v-for="order, index in cartSore.orders" :key="index">
      <OrderBox :order="order" />
    </template>
  </main>
</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    OrderBox: defineAsyncComponent(() => import("@/components/account/AOrderBox.vue"))
  },
  data() {
    return {
      cartSore: useCartStore()
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

main {
  @apply w-full h-full grow p-4 gap-2 overflow-auto;
  @apply flex flex-col justify-start items-center;
}
</style>
