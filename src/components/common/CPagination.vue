<template>
  <div class="pagination">
    <template v-if="index > 0">
      <button @click="() => toIndex(0)">
        &#60;&#60;
      </button>
    </template>
    <template v-if="index > 0">
      <button @click="() => toIndex(index - 1)">
        &#60;
      </button>
    </template>
    <template v-if="index > 1">
      <button @click="() => toIndex(index - 2)">
        {{ userIndex - 2 }}
      </button>
    </template>
    <template v-if="index > 0">
      <button @click="() => toIndex(index - 1)">
        {{ userIndex - 1 }}
      </button>
    </template>
    <span>
      {{ userIndex }}
    </span>
    <template v-if="index < max">
      <button @click="() => toIndex(index + 1)">
        {{ userIndex + 1 }}
      </button>
    </template>
    <template v-if="index + 1 < max">
      <button @click="() => toIndex(index + 2)">
        {{ userIndex + 2 }}
      </button>
    </template>
    <template v-if="index < max">
      <button @click="() => toIndex(index + 1)">
        &#62;
      </button>
    </template>
    <template v-if="index < max">
      <button @click="() => toIndex(max)">
        &#62;&#62;
      </button>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      required: true
    }
  },
  computed: {
    userIndex() {
      return this.index + 1
    }
  },
  methods: {
    toIndex(index: number) {
      const query = { ...this.$route.query, page: index.toString() }
      this.$router.push({ query })
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.pagination {
  @apply flex flex-row justify-center;
  @apply bg-base-300 text-base-content;
}

.pagination>button {
  @apply btn btn-sm btn-ghost;
}

.pagination>span {
  @apply btn btn-sm btn-ghost text-primary;
}
</style>
