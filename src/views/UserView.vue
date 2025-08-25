<template>
  <main>
    <AccountInfo class="mt-16 mb-8" />
    <OptionList>
      <OptionItem label="My Orders" :to="{ name: 'HomeView' }" />
      <OptionItem label="My Addresses" :to="{ name: 'HomeView' }" />
      <OptionItem label="My Account" :to="{ name: 'HomeView' }" />
      <OptionItem label="Sign Out" :to="{ name: 'HomeView' }" />
    </OptionList>
  </main>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    AccountInfo: defineAsyncComponent(() => import('@/components/account/AAccountInfo.vue')),
    OptionList: defineAsyncComponent(() => import('@/components/account/AOptionList.vue')),
    OptionItem: defineAsyncComponent(() => import('@/components/account/AOptionItem.vue'))
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

main {
  @apply flex flex-col gap-1 h-full;
}
</style>
