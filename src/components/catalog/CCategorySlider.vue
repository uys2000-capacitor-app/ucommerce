<template>
  <div class="category-slider">
    <template v-for="category, index in catalogStore.categories" :key="index">
      <RouterLink class="category-item" :class="{ active: index.toString() === categoryId }"
        :to="{ name: 'CategoryView', params: { category: category.seeName, categoryid: category.id } }"
        @click="onClick">
        {{ category.name }}
      </RouterLink>
    </template>
  </div>
</template>
<script lang="ts">
import { getRandomCategoryInfos } from '@/services/client/randomService';
import { useCatalogStore } from '@/stores/catalog';
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
  data() {
    return {
      catalogStore: useCatalogStore(),
      toCenterTimeout: 0,
      toSubCategoryTimeout: 0,
    }
  },
  methods: {
    onClick() {
      this.toSubCategory(0)
    },
    toCenter() {
      this.toCenterTimeout = setTimeout(() => {
        const category = document.querySelector('.category-item.active') as HTMLElement
        category.scrollIntoView({
          block: "center",
          inline: 'center',
          behavior: "smooth"
        })
      }, 100)
    },
    toSubCategory(id: number) {
      this.toSubCategoryTimeout = setTimeout(() => {
        const title = document.querySelector(`#subcategory-${id}`) as HTMLElement
        title?.scrollIntoView({
          behavior: "smooth"
        })
      })
    },
    loadCategories() {
      setTimeout(async () => {
        this.catalogStore.categories = await getRandomCategoryInfos(20)
        this.toCenter()
      }, 1000);
    }
  },
  computed: {
    categoryId() {
      return this.$route.params.categoryid as string
    }
  },
  watch: {
    categoryId() {
      if (this.categoryId) this.toCenter()
    }
  },
  mounted() {
    if (this.catalogStore.categories.length == 0) this.loadCategories()
    else this.toCenter()
  },
  beforeUnmount() {
    clearTimeout(this.toCenterTimeout)
    clearTimeout(this.toSubCategoryTimeout)
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.category-slider {
  @apply w-full h-12 bg-base-200;
  @apply flex flex-row overflow-auto;
}

.category-item {
  @apply p-2 w-max shrink-0;
}

.category-item.active {
  @apply border-b-2;
}
</style>
