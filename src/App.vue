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
import { check, initUAuthService } from './services/server/authentication';
import { getPrefence } from './services/capacitor/preferences';
import { useAccountStore } from './stores/account';

export default {
  components: { RouterView, Transition },
  data() {
    return {
      accountStore: useAccountStore()
    }
  },
  methods: {
    async setAndCheckAuth() {
      const token = await getPrefence("authToken")
      console.log(token)
      if (token) initUAuthService(token)
      else initUAuthService()
      const result = await check()
      if (result?.status) {
        this.accountStore.isLogged = await result.status
        this.accountStore.user = { name: result.name, email: result.email }
      }
    }
  },
  async mounted() {
    await this.setAndCheckAuth()
    hideSplashScreen()
  }
}
</script>
