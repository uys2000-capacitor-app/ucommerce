<template>
  <div class="card-items">
    <template v-if="cardStore.items != 0">
      <template v-for="cardProduct, index in cardStore.products" :key="index">
        <CardProduct :product="cardProduct.product" v-model:amount="cardProduct.amount" />
      </template>
      <button class="card-buy">Buy</button>
    </template>
    <template v-else>
      <div class="cart-empty">
        <EmptyCart class="size-40 fill-base-content mr-6" />
        <span>
          Your Cart is Empty
        </span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { useCardStore } from '@/stores/cart';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    CardProduct: defineAsyncComponent(() => import("@/components/card/CCardProduct.vue")),
    EmptyCart: defineAsyncComponent(() => import("@/components/icon/IEmptyCart.vue")),
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

.card-items {
  @apply flex flex-col h-full grow gap-1;
  @apply overflow-auto relative;
}


.card-buy {
  @apply sticky bottom-0 left-0;
  @apply btn btn-primary w-1/2 m-2 mt-auto ml-auto;
}

.cart-empty {
  @apply flex flex-col justify-center items-center gap-4 grow;
}
</style>
