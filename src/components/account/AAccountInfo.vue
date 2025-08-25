<template>
  <div class="account-info">
    <div class="avatar avatar-placeholder">
      <div class="bg-primary text-neutral-content w-24 rounded-full">
        <span class="text-3xl">{{ name.charAt(0) }}</span>
      </div>
    </div>
    <div class="welcome">Welcome <span class="name">{{ name }}</span></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      default: "User"
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.account-info {
  @apply flex flex-col gap-1 items-center;
}
</style>
