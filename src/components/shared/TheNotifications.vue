<template>
  <div class="notification-wrapper">
    <template v-for="notification, index in catalogStore.notifications" :key="index">
      <Notification :notification="notification" />
    </template>
  </div>
</template>
<script lang="ts">
import { useCatalogStore } from '@/stores/catalog';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Notification: defineAsyncComponent(() => import("@/components/common/CNotification.vue"))
  },
  data() {
    return {
      catalogStore: useCatalogStore()
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.notification-wrapper {
  @apply absolute w-fit right-0 top-0 p-2 gap-1;
}
</style>
