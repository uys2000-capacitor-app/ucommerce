<template>
  <div class="address-list">
    <template v-for="address, index in accountStore.addresses" :key="index">
      <div class="flex gap-2 items-center bg-base-100 p-2 w-[calc(100vw-2.25rem)]">
        <span>
          {{ address.title }}
        </span>
        <span class="mr-auto text-xs text-nowrap overflow-hidden text-ellipsis">
          {{ address.content }}
        </span>
        <button class="btn" @click="() => onChoose(address)">
          Choose
        </button>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { useAccountStore } from '@/stores/account';
import { useCartStore } from '@/stores/cart';
import type { UAddress } from '@/types/account';

export default {
  emits: ["choose"],
  data() {
    return {
      cartStore: useCartStore(),
      accountStore: useAccountStore()
    }
  },
  methods: {
    onChoose(address: UAddress) {
      this.$emit("choose", address)
    }
  }
}
</script>
<style scoped>
@reference '@/assets/main.css';

.address-list {
  @apply flex flex-col gap-1;
}
</style>
