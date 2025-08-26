<template>
  <RouterView v-slot="{ Component }">
    <Transition name="layout">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script lang="ts">
import { Transition } from 'vue';
import { RouterView } from 'vue-router'
import { hideSplashScreen } from './services/capacitor/splashScreen';
import { useCartStore } from './stores/cart';
import { getRandomProduct } from './services/client/randomService';
import { useAccountStore } from './stores/account';

export default {
  components: { RouterView, Transition },
  async mounted() {
    hideSplashScreen()
    if (false) {
      const store = useCartStore()
      store.products.push({ amount: 1, product: await getRandomProduct(0) })

      const store2 = useAccountStore()
      store2.addresses.push({
        id: 0,
        title: "Home",
        phone: "0555 055 5555",
        content: "Murat Pasa Caddesi Kazim Sokak. Numara:5 daire:8"
      })
    }
  }
}
</script>
