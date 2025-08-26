<template>
  <Modal ref="modal" id="address-modal" @close="onClose" class="modal-bottom">
    <AddressForm v-if="isVisible" />
  </Modal>
</template>
<script lang="ts">
import { defineAsyncComponent } from 'vue';
import type CModal from "@/components/common/CModal.vue"
import type { UProductFull } from '@/types/catalog';
import { useAccountStore } from '@/stores/account';
export default {
  components: {
    Modal: defineAsyncComponent(() => import("@/components/common/CModal.vue")),
    AddressForm: defineAsyncComponent(() => import("@/components/account/AAddressForm.vue")),
  },
  data() {
    return {
      accountStore: useAccountStore(),
      product: {} as UProductFull,
    }
  },
  methods: {
    show() {
      const modal = this.$refs["modal"] as typeof CModal
      modal.show()
    },
    close() {
      const modal = this.$refs["modal"] as typeof CModal
      modal.close()
    },
    onClose() {
      this.accountStore.closeAddressModal()
    }
  },
  computed: {
    isVisible() {
      return this.accountStore.isAddressModalVisible
    },
  },
  watch: {
    isVisible() {
      if (this.isVisible) this.show()
      else this.close()
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.product-badge {
  @apply absolute top-0 left-0 rounded-box px-1 bg-primary text-primary-content;
}

:slotted(.product-content) {
  @apply flex flex-col gap-2 p-2;
}
</style>
