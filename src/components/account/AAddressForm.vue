<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label class="floating-label">
        <input type="text" class="input" placeholder="Title" v-model="accountStore.address.title" />
        <span>Title</span>
      </label>
      <label class="floating-label">
        <input type="text" class="input" placeholder="Phone" v-model="accountStore.address.phone" />
        <span>Phone</span>
      </label>
    </div>
    <label class="floating-label">
      <textarea type="text" class="textarea" placeholder="Address" v-model="accountStore.address.content" />
      <span>Address</span>
    </label>
    <input class="btn btn-primary" type="submit" :value="isEditing ? 'Update' : 'Add'">
  </form>
</template>
<script lang="ts">
import { useAccountStore } from '@/stores/account';

export default {
  data() {
    return {
      isEditing: false,
      accountStore: useAccountStore(),
    }
  },
  methods: {
    onSubmit() {
      if (!this.isEditing) {
        const id = this.accountStore.addresses.length == 0 ? 0 : this.accountStore.addresses[this.accountStore.addresses.length - 1].id + 1
        this.accountStore.addresses.push({
          ...this.accountStore.address,
          id: id
        })
      }
      else {
        const index = this.accountStore.addresses.findIndex(a => a.id == this.accountStore.address.id)
        this.accountStore.addresses[index] = this.accountStore.address
      }
      this.accountStore.closeAddressModal()
    }
  },
  mounted() {
    if (!this.accountStore.address.title)
      this.isEditing = false
    else this.isEditing = true
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

form {
  @apply flex flex-col gap-4 p-4
}

form>div {
  @apply flex flex-row gap-4
}
</style>
