<template>
  <dialog :id="id" class="modal">
    <div class="modal-box">
      <form method="dialog" @submit="onClose">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <slot />
    </div>
    <form method="dialog" class="modal-backdrop" @submit="onClose">
      <button>close</button>
    </form>
  </dialog>
</template>
<script lang="ts">
export default {
  emits: ["show", "close"],
  props: {
    id: {
      type: String,
      default: "modal"
    }
  },
  methods: {
    show() {
      const dialog = document.querySelector(`#${this.id}`) as HTMLDialogElement
      dialog.showModal()
      this.$emit("show")
    },
    close() {
      const dialog = document.querySelector(`#${this.id}`) as HTMLDialogElement
      dialog.close()
      this.$emit("close")
    },
    onClose() {
      this.$emit("close")
    }
  }
}
</script>
