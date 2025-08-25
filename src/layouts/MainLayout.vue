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
    </div>
    <TheDock />
    <ProductModal />
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
    ProductModal: defineAsyncComponent(() => import('@/components/catalog/productDetail/CProductModal.vue')),
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

#layout {
  @apply flex flex-col flex-nowrap;
  height: 100vh;
  height: 100dvh;
  width: 100vw;
  width: 100dvw;
}

#layout-content {
  @apply flex flex-col flex-nowrap shrink;
  @apply h-full w-full grow overflow-hidden;
}
</style>
