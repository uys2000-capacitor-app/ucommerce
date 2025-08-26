<template>
  <main>
    <AddressList>
      <template v-for="address, index in accountStore.addresses" :key="index">
        <AddressBox :address="address" />
      </template>
    </AddressList>
  </main>
</template>

<script lang="ts">
import { useAccountStore } from '@/stores/account';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    AddressList: defineAsyncComponent(() => import('@/components/account/AAddressList.vue')),
    AddressBox: defineAsyncComponent(() => import('@/components/account/AAddressBox.vue')),
  },
  data() {
    return {
      accountStore: useAccountStore()
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

main {
  @apply flex flex-col gap-1 h-full grow;
}
</style>
