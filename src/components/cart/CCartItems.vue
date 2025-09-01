<template>
  <div class="cart-items">
    <template v-if="cartStore.items != 0">
      <template v-for="cardProduct, index in cartStore.products" :key="index">
        <CartProduct :product="cardProduct.product" v-model:amount="cardProduct.amount" />
      </template>
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
import { useCartStore } from '@/stores/cart';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    CartProduct: defineAsyncComponent(() => import("@/components/cart/CCartProduct.vue")),
    EmptyCart: defineAsyncComponent(() => import("@/components/icon/IEmptyCart.vue")),
  },
  data() {
    return {
      cartStore: useCartStore()
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.cart-items {
  @apply flex flex-col h-full grow gap-1;
  @apply overflow-auto relative;
}

.cart-buy {
  @apply sticky bottom-0 left-0;
  @apply btn btn-primary w-1/2 m-2 mt-auto ml-auto;
}

.cart-empty {
  @apply flex flex-col justify-center items-center gap-4 grow;
}
</style>
