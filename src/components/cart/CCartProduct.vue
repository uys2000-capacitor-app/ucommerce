<template>
  <div class="cart-product" @click="onProductClicked">
    <img :src="product.thumbnail" :alt="`Image of ${product.name}`">
    <div :class="{ 'mr-auto': hideAmount }">
      {{ product.name }}
    </div>
    <div>
      {{ product.price * amountValue }} {{ product.currency }}
    </div>
    <div v-if="!hideAmount">
      <Counter :negative="true" :model-value="amountValue" @update:model-value="(n: number) => onUpdateAmount(n)" />
    </div>
  </div>
</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { useCatalogStore } from '@/stores/catalog';
import type { UProduct } from '@/types/catalog';
import { defineAsyncComponent, type PropType } from 'vue';

export default {
  emits: ["update:amount"],
  components: {
    Counter: defineAsyncComponent(() => import("@/components/common/CCounter.vue"))
  },
  props: {
    product: {
      type: Object as PropType<UProduct>,
      required: true
    },
    amount: {
      type: Number,
      default: 1
    },
    hideAmount: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cartStore: useCartStore(),
      catalogStore: useCatalogStore()
    }
  },
  methods: {
    onProductClicked(e: Event) {
      const target = e.target as HTMLElement;
      if (!target.className.includes("counter"))
        this.catalogStore.openProductModal(this.product)
    },
    onUpdateAmount(n: number) {
      if (n > 0) this.amountValue = n
      else this.cartStore.removeFromCard(this.product)
    }
  },
  computed: {
    amountValue: {
      get() {
        return this.amount
      },
      set(value: number) {
        this.$emit("update:amount", value)
      }
    }
  },
}
</script>

<style scoped>
@reference '@/assets/main.css';

.cart-product {
  @apply bg-base-300;
  @apply w-full flex gap-1 items-center justify-between p-2;
}

.cart-product img {
  @apply w-20 h-20 rounded-box;
}
</style>
