<template>
  <div class="account-info">
    <div class="avatar avatar-placeholder">
      <div class="bg-primary text-neutral-content w-24 rounded-full">
        <span class="text-3xl">{{ user.name.charAt(0) }}</span>
      </div>
    </div>
    <div class="welcome">Welcome <span class="name">{{ user.name }}</span></div>
  </div>
</template>

<script lang="ts">
import type { UUser } from '@/types/account';
import type { PropType } from 'vue';

export default {
  props: {
    user: {
      type: Object as PropType<UUser>,
      required: true
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.account-info {
  @apply flex flex-col gap-1 items-center;
}
</style>
