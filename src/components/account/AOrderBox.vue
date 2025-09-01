<template>
  <div class="order">
    <Accordion class="bg-base-200">
      <template #title>
        <OrderBoxTitle :order="order" />
      </template>
      <template #content>
        <OrderBoxContent :order="order" />
      </template>
    </Accordion>
  </div>
</template>

<script lang="ts">
import { getOrderTotal } from '@/services/client/productUtility';
import type { UCartOrder } from '@/types/cart';
import { defineAsyncComponent, type PropType } from 'vue';
export default {
  components: {
    Accordion: defineAsyncComponent(() => import("@/components/daisy/DAccordion.vue")),
    OrderBoxTitle: defineAsyncComponent(() => import("@/components/account/AOrderBoxTitle.vue")),
    OrderBoxContent: defineAsyncComponent(() => import("@/components/account/AOrderBoxContent.vue")),
  },
  props: {
    order: {
      type: Object as PropType<UCartOrder>,
      required: true
    }
  },
  methods: {
    getOrderTotal: getOrderTotal
  }
}
</script>

<style scoped>
.order {
  @apply w-full;
}
</style>
