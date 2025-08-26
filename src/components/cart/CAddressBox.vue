<template>
  <div class="address-box">
    <template v-if="address">
      <DCollapse :isOpen="isOpen">
        <template #title>
          <div class="flex items-center gap-2 w-[calc(100vw-2rem)]">
            <span>{{ address.title }}</span>
            <span class="mr-auto text-xs text-nowrap overflow-hidden text-ellipsis">
              {{ address.content }}
            </span>
            <button v-if="!isOpen" class="btn ml-auto" @click="isOpen = !isOpen">Chooe</button>
          </div>
        </template>
        <template #content>
          <AddressList @choose="onChoose" />
        </template>
      </DCollapse>
    </template>
    <template v-else>
      <button class="btn mx-auto my-4" @click="onAdd">Add & Choose Address</button>
    </template>
  </div>
</template>
<script lang="ts">
import { useAccountStore } from '@/stores/account';
import { useCartStore } from '@/stores/cart';
import type { UAddress } from '@/types/account';
import { defineAsyncComponent, type PropType } from 'vue';

export default {
  components: {
    DCollapse: defineAsyncComponent(() => import("@/components/daisy/DCollapse.vue")),
    AddressList: defineAsyncComponent(() => import("@/components/cart/CAddressList.vue")),
  },
  props: {
    address: {
      type: Object as PropType<UAddress>,
    }
  },
  data() {
    return {
      cartStore: useCartStore(),
      accountStore: useAccountStore(),
      isOpen: false
    }
  },
  methods: {
    onAdd() {
      this.accountStore.openAddressModal({} as UAddress)
    },
    onChoose(address: UAddress) {
      this.cartStore.address = address
      this.isOpen = false
    }
  },
  computed: {
    addressCount() {
      return this.accountStore.addresses.length
    }
  },
  watch: {
    addressCount(newLength: number, oldLength: number) {
      console.log(newLength, oldLength)
      if (newLength == 1 && oldLength == 0)
        this.cartStore.address = this.accountStore.addresses[0]
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.address-box {
  @apply flex flex-row items-center gap-1;
  @apply bg-base-200 shrink-0;
}

.collapse-title {
  @apply flex flex-row items-center gap-1 p-1;
}
</style>
