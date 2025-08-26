<template>
  <div class="collapse" :class="{ 'collapse-open': isOpen == true, 'collapse-close': isOpen == false }">
    <input type="checkbox" v-if="isOpen == undefined" />
    <div class="collapse-title p-4">
      <slot name="title" />
    </div>
    <div class="collapse-content">
      <slot name="content" />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: undefined
    }
  }
}
</script>
