<template>
  <div id="layout">
    <TheHeader />
    <div id="layout-content">
      <RouterView v-slot="{ Component }">
        <Transition name="layout">
          <KeepAlive>
            <component :is="Component" />
          </KeepAlive>
        </Transition>
      </RouterView>
      <TheNotifications />
    </div>
    <TheDock />
    <ProductModal />
    <AddressModal />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, Transition, KeepAlive } from 'vue';
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView, Transition, KeepAlive,
    TheHeader: defineAsyncComponent(() => import('@/components/shared/TheHeader.vue')),
    TheDock: defineAsyncComponent(() => import('@/components/shared/TheDock.vue')),
    TheNotifications: defineAsyncComponent(() => import('@/components/shared/TheNotifications.vue')),
    ProductModal: defineAsyncComponent(() => import('@/components/catalog/productDetail/CProductModal.vue')),
    AddressModal: defineAsyncComponent(() => import('@/components/account/AAddressModal.vue')),
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

#layout {
  @apply flex flex-col flex-nowrap relative;
  height: 100vh;
  height: 100dvh;
  width: 100vw;
  width: 100dvw;
}

#layout-content {
  @apply flex flex-col flex-nowrap shrink relative;
  @apply h-full w-full grow overflow-hidden;
}
</style>
