<template>
  <div class="account-list">
    <slot />
  </div>
</template>

<style scoped>
@reference '@/assets/main.css';

.account-list {
  @apply flex flex-col px-2 gap-1;
}
</style>
