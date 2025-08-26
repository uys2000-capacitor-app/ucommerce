<template>
  <div class="address-box">
    <span>{{ address.title }}</span>
    <button class="btn ml-auto" @click="onEdit">Edit</button>
    <button class="btn" @click="onRemove">Remove</button>
  </div>
</template>
<script lang="ts">
import { useAccountStore } from '@/stores/account';
import type { UAddress } from '@/types/account';
import type { PropType } from 'vue';

export default {
  props: {
    address: {
      type: Object as PropType<UAddress>,
      required: true
    }
  },
  data() {
    return {
      accountStore: useAccountStore(),
    }
  },
  methods: {
    onEdit() {
      this.accountStore.openAddressModal({ ...this.address })
    },
    onRemove() {
      this.accountStore.addresses = this.accountStore.addresses.filter(a => a.id != this.address.id)
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.address-box {
  @apply flex flex-row items-center gap-1 p-1;
  @apply bg-base-200;
}
</style>
