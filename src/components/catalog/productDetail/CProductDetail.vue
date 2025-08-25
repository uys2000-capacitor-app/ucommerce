<template>
  <div class="product-detail">
    <div class="product-name">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
    </div>
    <ProductDetailSize :product="product" />
    <ProductDetailPrice :product="product" v-if="false" />
    <ProductDetailAdd :product="product" />
  </div>
</template>

<script lang="ts">
import type { UProductFull } from '@/types/catalog';
import { defineAsyncComponent, type PropType } from 'vue';

export default {
  components: {
    ProductDetailSize: defineAsyncComponent(() => import("@/components/catalog/productDetail/CProductDetailSize.vue")),
    ProductDetailPrice: defineAsyncComponent(() => import("@/components/catalog/productDetail/CProductDetailPrice.vue")),
    ProductDetailAdd: defineAsyncComponent(() => import("@/components/catalog/productDetail/CProductDetailAdd.vue")),
  },
  props: {
    product: {
      type: Object as PropType<UProductFull>,
      required: true
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.product-detail {
  @apply flex flex-col gap-1 p-1;
}

.product-name h2 {
  @apply text-xl font-bold;
}

.product-name p {
  @apply text-xs max-h-20 overflow-auto;
}
</style>
