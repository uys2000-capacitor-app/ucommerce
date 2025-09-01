<template>
  <main>
    <AccountInfo :user="accountStore.user" class="mt-16 mb-8" />
    <OptionList>
      <OptionItem label="My Orders" :to="{ name: 'OrdersView' }" />
      <OptionItem label="My Addresses" :to="{ name: 'UserAddressesView' }" />
      <template v-if="accountStore.isLogged">
        <OptionItem label="Sign Out" :to="{ hash: '#signout' }" />
      </template>
      <template v-else>
        <OptionItem label="Sign In" :to="{ name: 'SignView' }" />
      </template>
    </OptionList>
  </main>
</template>

<script lang="ts">
import { setPrefence } from '@/services/capacitor/preferences';
import { signOut } from '@/services/server/authentication';
import { useAccountStore } from '@/stores/account';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    AccountInfo: defineAsyncComponent(() => import('@/components/account/AAccountInfo.vue')),
    OptionList: defineAsyncComponent(() => import('@/components/account/AOptionList.vue')),
    OptionItem: defineAsyncComponent(() => import('@/components/account/AOptionItem.vue'))
  },
  data() {
    return {
      accountStore: useAccountStore()
    }
  },
  methods: {
    async signOut() {
      const result = await signOut()
      if (result) {
        this.accountStore.isLogged = false
        const defaultUser = {
          name: 'Anon',
          email: '',
        }
        this.accountStore.user = defaultUser
        setPrefence("authToken", "")
      }
      this.$router.push({ "hash": "" })
    }
  },
  computed: {
    hash() {
      return this.$route.hash
    }
  },
  watch: {
    hash() {
      if (this.hash == "#signout") this.signOut()
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

main {
  @apply flex flex-col gap-1 h-full;
}
</style>
