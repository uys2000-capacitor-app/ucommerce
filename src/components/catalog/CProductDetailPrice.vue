<template>
  <div class="product-prices">
    <span class="product-pricetext">Price:</span>
    <span class="product-oldprice" v-if="hasDiscount">{{ product.oldprice }}
      {{ product.currency }}</span>
    <span class="product-price">{{ product.price }} {{ product.currency }}</span>
  </div>
</template>

<script lang="ts">
import { hasDiscount } from '@/services/client/productUtility';
import type { UProductFull } from '@/types/catalog';
import type { PropType } from 'vue';

export default {
  props: {
    product: {
      type: Object as PropType<UProductFull>,
      required: true
    }
  },
  computed: {
    hasDiscount() {
      return hasDiscount(this.product)
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.product-prices {
  @apply flex gap-1;
}

.product-oldprice {
  @apply text-primary line-through text-sm;
}

.product-unitprice {
  @apply font-bold;
}

.product-unit {
  @apply text-xs;
}
</style>
