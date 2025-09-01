<template>
  <main>
    <AddressBox v-if="cartStore.products.length != 0" :address="cartStore.address" />
    <CartItems />
    <template v-if="cartStore.address && cartStore.products.length != 0">
      <button class="btn btn-primary m-auto mb-4 w-1/2" @click="addToCart">
        Order Now
      </button>
    </template>
  </main>
</template>

<script lang="ts">
import { useAccountStore } from '@/stores/account';
import { useCartStore } from '@/stores/cart';
import { useCatalogStore } from '@/stores/catalog';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    AddressBox: defineAsyncComponent(() => import("@/components/cart/CAddressBox.vue")),
    CartItems: defineAsyncComponent(() => import("@/components/cart/CCartItems.vue")),
  },
  data() {
    return {
      catalogStore: useCatalogStore(),
      accounStore: useAccountStore(),
      cartStore: useCartStore(),
    }
  },
  methods: {
    addToCart() {
      this.cartStore.orders.push({ timestamp: Date.now(), address: this.cartStore.address, products: this.cartStore.products })
      this.cartStore.products = []
      this.catalogStore.addNotification("Your order successfully created", "success", 2000)
    }
  },
  mounted() {
    this.cartStore.address = this.accounStore.addresses[0]
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

main {
  @apply flex flex-col flex-nowrap h-full grow gap-2;
  @apply overflow-hidden;
}

h2 {
  @apply text-xl font-bold p-4;
}
</style>
