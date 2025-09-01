<template>
  <div class="order-address">
    <div class="flex justify-between">
      <span>
        {{ order.address.title }}
      </span>
      <span>
        {{ order.address.phone }}
      </span>
    </div>
    <div>
      <p>{{ order.address.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import type { UCartOrder } from '@/types/cart';
import type { PropType } from 'vue';

export default {
  props: {
    order: {
      type: Object as PropType<UCartOrder>,
      required: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.order-address {
  @apply flex flex-col p-2 bg-base-300 rounded-box;
}
</style>
