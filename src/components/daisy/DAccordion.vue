<template>
  <div class="collapse">
    <input type="radio" :name="name" />
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
    name: {
      type: String,
      default: "accordion"
    }
  }
}
</script>
