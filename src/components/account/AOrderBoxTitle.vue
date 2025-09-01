<template>
  <div class="order-title">
    <div class="order-products">
      <template v-for="cartProduct, index in order.products" :key="index">
        <div class="short-order-item">
          <img :src="cartProduct.product.thumbnail" alt="">
        </div>
      </template>
    </div>
    <div class="order-total">
      <span>{{ getOrderTotal(order.products) }} {{ order.products[0].product.currency }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { getOrderTotal } from '@/services/client/productUtility';
import type { UCartOrder } from '@/types/cart';
import type { PropType } from 'vue';

export default {
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

.order-title {
  @apply flex justify-between items-center;
}

.order-products {
  @apply flex;
}

.order-products .short-order-item {
  @apply relative;
  @apply border rounded-box;
  @apply -mr-2 size-8 overflow-hidden;
}
</style>
