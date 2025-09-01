<template>
  <main>
    <template v-if="isSignIn">
      <form @submit.prevent="signIn">
        <h2>Sign In</h2>
        <label class="floating-label">
          <input type="text" class="input" placeholder="EMail" v-model="email" />
          <span>EMail</span>
        </label>
        <label class="floating-label">
          <input type="text" class="input" placeholder="Password" v-model="password" />
          <span>Password</span>
        </label>
        <p class="ml-auto text-xs link" @click="changeForm">Sign Up</p>
        <input class="btn" type="submit" value="Sign In">
      </form>
    </template>
    <template v-else>
      <form @submit.prevent="signUp">
        <h2>Sign Up</h2>
        <label class="floating-label">
          <input type="text" class="input" placeholder="Name" v-model="name" />
          <span>Name</span>
        </label>
        <label class="floating-label">
          <input type="text" class="input" placeholder="EMail" v-model="email" />
          <span>EMail</span>
        </label>
        <label class="floating-label">
          <input type="text" class="input" placeholder="Password" v-model="password" />
          <span>Password</span>
        </label>
        <p class="ml-auto text-xs link" @click="changeForm">Sign In</p>
        <input class="btn" type="submit" value="Sign Up">
      </form>
    </template>
  </main>
</template>

<script lang="ts">
import { setPrefence } from '@/services/capacitor/preferences';
import { signIn, signUp } from '@/services/server/authentication';
import { useAccountStore } from '@/stores/account';

export default {
  data() {
    return {
      accountStore: useAccountStore(),
      isSignIn: true,
      name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    changeForm() {
      this.isSignIn = !this.isSignIn
      this.name = ""
      this.email = ""
      this.password = ""
    },
    async signIn() {
      const result = await signIn(this.email, this.password, "android")
      if (result) {
        await setPrefence("authToken", result.token)
        this.accountStore.isLogged = true
        this.accountStore.user = { name: result.name, email: result.email }
        this.$router.push({ name: "UserView" })
      }
    },
    async signUp() {
      const result = await signUp(this.name, this.email, this.password, "android")
      if (result) {
        await setPrefence("authToken", result.token)
        this.accountStore.isLogged = true
        this.accountStore.user = { name: result.name, email: result.email }
        this.$router.push({ name: "UserView" })
      }
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

main {
  @apply h-full w-full grow;
  @apply flex flex-col items-center justify-center;
}

form {
  @apply flex flex-col gap-2;
}
</style>
