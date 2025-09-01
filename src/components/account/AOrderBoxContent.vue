<template>
  <div class="order-content">
    <div class="products bg-base-300 rounded-box overflow-hidden">
      <template v-for="cartProduct, index in order.products" :key="index">
        <CartProduct :product="cartProduct.product" hide-amount />
      </template>
    </div>
    <div class="address">
      <OrderAddress :order="order" />
    </div>
    <div class="summary">
      <div class="flex flex-col p-2 bg-base-300">
        <div>Total: <span>{{ getOrderTotal(order.products) }} {{ order.products[0].product.currency }}</span></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getOrderTotal } from '@/services/client/productUtility';
import type { UCartOrder } from '@/types/cart';
import { defineAsyncComponent, type PropType } from 'vue';

export default {
  components: {
    CartProduct: defineAsyncComponent(() => import("@/components/cart/CCartProduct.vue")),
    OrderAddress: defineAsyncComponent(() => import("@/components/account/AOrderAddress.vue")),
  },
  props: {
    order: {
      type: Object as PropType<UCartOrder>,
      required: true
    }
  },
  methods: {
    getOrderTotal: getOrderTotal
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.order-content {
  @apply flex flex-col gap-2;
}
</style>
