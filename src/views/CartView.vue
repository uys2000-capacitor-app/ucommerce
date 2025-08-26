<template>
  <main>
    <AddressBox v-if="cardStore.products.length != 0" :address="cardStore.address" />
    <CartItems />
    <template v-if="cardStore.address && cardStore.products.length != 0">
      <button class="btn btn-primary m-auto mb-4 w-1/2">
        Order Now
      </button>
    </template>
  </main>
</template>

<script lang="ts">
import { useAccountStore } from '@/stores/account';
import { useCartStore } from '@/stores/cart';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    AddressBox: defineAsyncComponent(() => import("@/components/cart/CAddressBox.vue")),
    CartItems: defineAsyncComponent(() => import("@/components/cart/CCartItems.vue")),
  },
  data() {
    return {
      accounStore: useAccountStore(),
      cardStore: useCartStore(),
    }
  },
  mounted() {
    this.cardStore.address = this.accounStore.addresses[0]
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
