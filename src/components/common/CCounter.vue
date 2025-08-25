<template>
  <div class="counter">
    <span class="counter-decrease" @click="decrease">-</span>
    <span class="counter-value">{{ value }}</span>
    <span class="counter-increase" @click="increase">+</span>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    negative: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    decrease() {
      if (this.modelValue != 1 || this.negative)
        this.$emit("update:modelValue", this.modelValue - 1)
    },
    increase() {
      this.$emit("update:modelValue", this.modelValue + 1)
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value: number) {
        this.$emit("update:modelValue", value)
      }
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.counter {
  @apply flex flex-row;
}

.counter>* {
  @apply w-8 h-8;
  @apply flex flex-row justify-center items-center;
}

.counter-decrease {
  @apply border border-r-0 shadow-xl rounded-l-box;
}

.counter-value {
  @apply border-y shadow-xl bg-primary;
}

.counter-increase {
  @apply border border-l-0 shadow-xl rounded-r-box;
}
</style>
