<template>
  <div class="address-list">
    <slot />
    <div class="mt-auto mx-auto mb-2">
      <button class="btn btn-primary" @click="addAddress">
        Add Address
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useAccountStore } from '@/stores/account';
import type { UAddress } from '@/types/account';

export default {
  data() {
    return {
      accountStore: useAccountStore()
    }
  },
  methods: {
    addAddress() {
      this.accountStore.openAddressModal({} as UAddress)
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.address-list {
  @apply flex flex-col gap-1 h-full grow p-1;
}
</style>
