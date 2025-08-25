<template>
  <div class="product-size">
    <template v-if="product.count != 0">
      <span>Unit: {{ product.count }} {{ product.unit }}</span>
      <template v-if="product.targetCount != 0">
        <div class="product-unitprices">
          <span class="product-unitprice">
            Unit Price:
            {{ perPrice }}
            {{ product.currency }}
          </span>
          <span class="product-unit">
            for per {{ !isNaN(product.targetCount) ? 1 : product.targetCount }} {{ product.unit }}
          </span>
        </div>
      </template>
    </template>
    <template v-if="product.amount != 0 && !isNaN(product.amount)">
      <span>Amount: {{ product.amount }} {{ product.unit }}</span>
      <template v-if="product.targetAmount != 0">
        <div class="product-unitprices">
          <span class="product-unitprice">
            Unit Price:
            {{ perAmountPrice }}
            {{ product.currency }}
          </span>
          <span class="product-unit">
            for per {{ product.targetAmount }} {{ product.unit }}
          </span>
        </div>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { getPerPrice, getPerPriceForAmount } from '@/services/client/productUtility';
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
    perPrice() {
      return getPerPrice(this.product)
    },
    perAmountPrice() {
      return getPerPriceForAmount(this.product)
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.product-size {
  @apply flex flex-col gap-1 text-sm;
}

.product-unitprices {
  @apply flex items-center gap-1 text-sm;
}

.product-unitprice {
  @apply font-bold;
}

.product-unit {
  @apply text-xs;
}
</style>
