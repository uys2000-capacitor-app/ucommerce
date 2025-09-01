<template>
  <nav class="dock">
    <button @click="$router.push({ name: 'CartView' })"
      :class="{ 'dock-active': isCartViewActive, 'dock-child-active': isCartChildViewActive }">
      <div class="badge-wrapper">
        <IShoppingCart />
        <div class="badge" v-if="cartStore.items != 0">{{ cartStore.items }}</div>
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
import { useCartStore } from '@/stores/cart';
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
      cartStore: useCartStore()
    }
  },
  computed: {
    isCartViewActive() {
      return this.$route.name == 'CartView'
    },
    isCartChildViewActive() {
      return this.$route.name == 'CartView' || this.$route.name == 'CartItemsView'
    },
    isHomeViewActive() {
      return this.$route.name == 'HomeView'
    },
    isHomeChildViewActive() {
      return this.$route.name == 'HomeView' || this.$route.name == 'CategoryView' || this.$route.name == 'SubCategoryView'
    },
    isUserViewActive() {
      return this.$route.name == 'UserView'
    },
    isUserChildViewActive() {
      return this.$route.name == 'UserView' || this.$route.name == 'UserAddressesView' || this.$route.name == 'SignView' || this.$route.name == 'OrdersView'
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
  @apply absolute top-0 -right-2 badge-xs badge-primary;
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
