<template>
  <div class="cart-address">
    <AddressBox :address="cardStore.address" />
    <template v-if="cardStore.address">
      <button class="btn btn-primary m-auto mb-4 w-1/2">
        Order Now
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import { useAccountStore } from '@/stores/account';
import { useCartStore } from '@/stores/cart';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    AddressBox: defineAsyncComponent(() => import("@/components/cart/CAddressBox.vue"))
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

.cart-address {
  @apply flex flex-col flex-nowrap h-full grow;
  @apply overflow-hidden;
}
</style>
