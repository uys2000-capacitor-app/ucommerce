<template>
  <div ref="box" class="uproduct-box" @click="onProductClicked">
    <img :src="image" class=" object-cover" :alt="`product image ${product.name}`" loading="lazy">
    <span class="product-name">{{ product.name }}</span>
    <span class="product-prices">
      <span class="product-old-price" v-if="hasDiscount">
        {{ product.oldprice }} TL
      </span>
      <span class="product-price">{{ product.price }} TL</span>
    </span>
    <div class="product-badge" v-if="hasDiscount">%{{ discount }}</div>
    <button class="product-btn" @click="onProductAdded">+</button>
  </div>
</template>
<script lang="ts">
import { getDiscount, hasDiscount } from '@/services/client/productUtility';
import { isVisibleInViewportListener, } from '@/services/client/utility';
import { useCartStore } from '@/stores/cart';
import { useCatalogStore } from '@/stores/catalog';
import type { UProduct } from '@/types/catalog';
import type { PropType } from 'vue';

export default {
  props: {
    product: {
      type: Object as PropType<UProduct>,
      required: true
    }
  },
  data() {
    return {
      image: "/loading.gif",
      catalogStore: useCatalogStore(),
      cartStore: useCartStore()
    }
  },
  methods: {
    onProductClicked(e: Event) {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() !== 'button')
        this.catalogStore.openProductModal(this.product)
    },
    onProductAdded() {
      this.cartStore.addToCard(this.product)
    }
  },
  computed: {
    hasDiscount() {
      return hasDiscount(this.product)
    },
    discount() {
      return getDiscount(this.product)
    }
  },
  mounted() {
    const el = this.$refs.box as HTMLElement
    isVisibleInViewportListener(el, () => {
      this.image = this.product.thumbnail
    })
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.uproduct-box {
  @apply flex flex-col relative;
  @apply bg-base-100 border border-base-300 rounded-box;
  @apply w-40 p-1 gap-1;
}

img {
  @apply size-38 m-auto rounded-box;
}


.product-name {
  @apply capitalize font-bold;
}

.product-prices {
  @apply flex flex-row gap-2;
}

.product-old-price {
  @apply text-primary line-through text-sm;
}

.product-badge {
  @apply absolute top-1 left-2 rounded-box px-1 bg-primary text-primary-content;
}

.product-btn {
  @apply btn btn-primary btn-xs;
  @apply absolute z-1;
  @apply top-1 right-2;
}
</style>
