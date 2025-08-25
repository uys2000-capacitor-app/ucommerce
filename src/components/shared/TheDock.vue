<template>
  <nav class="dock">
    <button @click="$router.push({ name: 'CartItemsView' })"
      :class="{ 'dock-active': isCartViewActive, 'dock-child-active': isCartChildViewActive }">
      <div class="badge-wrapper">
        <IShoppingCart />
        <div class="badge badge-xs badge-success" v-if="cardStore.items != 0">{{ cardStore.items }}</div>
      </div>
    </button>

    <button @click="$router.push({ name: 'HomeView' })"
      :class="{ 'dock-active': isHomeViewActive, 'dock-child-active': isHomeChildViewActive }">
      <IHome />
    </button>

    <button @click="$router.push({ name: 'UserView' })"
      :class="{ 'dock-active': isUserViewActive, 'dock-child-active': isUserChildViewActive }">
      <IPerson />
    </button>
  </nav>
</template>

<script lang="ts">
import { useCardStore } from '@/stores/cart';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    IHome: defineAsyncComponent(() => import("@/components/icon/IHome.vue")),
    IPerson: defineAsyncComponent(() => import("@/components/icon/IPerson.vue")),
    IShoppingCart: defineAsyncComponent(() => import("@/components/icon/IShoppingCart.vue")),
  },
  props: {
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cardStore: useCardStore()
    }
  },
  computed: {
    isCartViewActive() {
      return this.$route.name == 'CartItemsView'
    },
    isCartChildViewActive() {
      return this.$route.name == 'CartView' || this.$route.name == 'CartItemsView'
    },
    isHomeViewActive() {
      return this.$route.name == 'HomeView'
    },
    isHomeChildViewActive() {
      return this.$route.name == 'HomeView' || this.$route.name == 'CategoryView'
    },
    isUserViewActive() {
      return this.$route.name == 'UserView'
    },
    isUserChildViewActive() {
      return this.$route.name == 'UserView'
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.dock {
  @apply relative bg-base-300;
}

.dock .badge-wrapper {
  @apply relative w-fit;
}

.dock .badge-wrapper .badge {
  @apply absolute top-0 -right-2;
}

.dock :deep(svg) {
  @apply size-8 fill-base-content;
}

.dock-active :deep(svg) {
  @apply !size-10 fill-primary;
}

.dock-child-active::after {
  @apply !bg-primary !text-primary;
}
</style>
