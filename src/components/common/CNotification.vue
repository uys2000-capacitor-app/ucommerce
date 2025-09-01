<template>
  <div class="notification" :class="type">
    {{ notification.label }}
    <span class="notification-close" @click="clear">x</span>
  </div>
</template>

<script lang="ts">
import { useCatalogStore } from '@/stores/catalog';
import type { UNotification } from '@/types/catalog';
import type { PropType } from 'vue';

export default {
  props: {
    notification: {
      type: Object as PropType<UNotification>,
      required: true
    }
  },
  data() {
    return {
      catalogStore: useCatalogStore(),
      timeout: 0
    }
  },
  methods: {
    clear() {
      this.catalogStore.removeNotification(this.notification.id)
    }
  },
  computed: {
    type() {
      switch (this.notification.type) {
        case 'success':
          return "alert-success";
        case 'info':
          return "alert-info";
        case 'warning':
          return "alert-warning";
        case 'error':
          return "alert-error";
        default:
          return "";
      }
    }
  },
  mounted() {
    if (this.notification.timeout != 0)
      setTimeout(this.clear, this.notification.timeout);
  },
  beforeUnmount() {
    clearTimeout(this.timeout)
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.notification {
  @apply alert relative;
}

.notification-close {
  @apply absolute top-0 right-0 size-4;
  @apply bg-base-300 text-base-content rounded-full;
  @apply flex justify-center items-center;
}
</style>
