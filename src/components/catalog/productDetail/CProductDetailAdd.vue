<template>
  <div class="product-add">
    <div class="product-counter">
      <span>Total Count</span>
      <Counter v-model="catalogStore.amount" />
    </div>
    <div class="product-action">
      <button @click="addToCard">Add</button>
      <div class="prices">
        <div class="price">
          <div class="oldprice" v-if="hasDiscount">
            {{ product.oldprice * catalogStore.amount }}
          </div>
          {{ product.price * catalogStore.amount }} {{ product.currency }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { hasDiscount } from '@/services/client/productUtility';
import { useCartStore } from '@/stores/cart';
import { useCatalogStore } from '@/stores/catalog';
import type { UProductFull } from '@/types/catalog';
import { defineAsyncComponent, type PropType } from 'vue';

export default {
  components: {
    Counter: defineAsyncComponent(() => import("@/components/common/CCounter.vue"))
  },
  props: {
    product: {
      type: Object as PropType<UProductFull>,
      required: true
    }
  },
  data() {
    return {
      catalogStore: useCatalogStore(),
      cardStore: useCartStore()
    }
  },
  methods: {
    addToCard() {
      this.cardStore.addToCardMultiple(this.product, this.catalogStore.amount)
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

.product-add {
  @apply flex flex-col gap-1 pt-2;
}

.product-counter {
  @apply w-full flex items-center justify-between;
  @apply shadow rounded-t-box py-1;
}

.product-action {
  @apply flex flex-row items-center shadow rounded-b-box py-1;
}

.product-action button {
  @apply btn btn-primary w-full shrink rounded-r-none;
}

.prices {
  @apply flex justify-center items-center w-1/2 shrink rounded-l-none;
}

.price {
  @apply relative w-fit;
}

.oldprice {
  @apply absolute right-[100%] bottom-[30%] text-primary line-through text-sm;
}
</style>
