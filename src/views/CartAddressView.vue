<template>
  <div class="card-items">
    <template v-for="cardProduct, index in cardStore.products" :key="index">
      <CardProduct :product="cardProduct.product" v-model:amount="cardProduct.amount" />
    </template>
    <button v-if="cardStore.items != 0" class="card-buy">Buy</button>
  </div>
</template>

<script lang="ts">
import { useCardStore } from '@/stores/cart';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    CardProduct: defineAsyncComponent(() => import("@/components/card/CCardProduct.vue"))
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
  @apply flex flex-col flex-nowrap;
  @apply overflow-hidden;
}

h2 {
  @apply text-xl font-bold p-4;
}

.card-items {
  @apply flex flex-col h-full grow gap-1;
  @apply overflow-auto relative;
}


.card-buy {
  @apply sticky bottom-0 left-0;
  @apply btn btn-primary w-1/2 m-2 ml-auto;
}
</style>
