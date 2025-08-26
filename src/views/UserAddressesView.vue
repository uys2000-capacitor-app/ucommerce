<template>
  <main>
    <AddressList>
      <template v-for="address, index in accountStore.addresses" :key="index">
        <AddressBox :address="address" />
      </template>
      <template v-if="accountStore.addresses.length == 0">
        <div class="address-empty">
          <LocationAdd class="size-40 fill-base-content" />
          <span>Your Address List is Empty</span>
        </div>
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
    LocationAdd: defineAsyncComponent(() => import('@/components/icon/ILocationAdd.vue')),
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

.address-empty {
  @apply flex flex-col justify-center items-center gap-4 grow;
}
</style>
