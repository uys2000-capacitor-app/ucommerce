<template>
  <div class="subcategory-slider">
    <template v-for="category, index in catalogStore.categories" :key="index">
      <RouterLink class="subcategory-item" :class="{ active: index.toString() === categoryId }"
        :to="{ name: 'CategoryView', params: { name: category.seeName, id: category.id } }">
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
      catalogStore: useCatalogStore()
    }
  },
  methods: {
    toCenter() {
      setTimeout(() => {
        const category = document.querySelector('.category-item.active') as HTMLElement
        category.scrollIntoView({
          block: "center",
          inline: 'center',
          behavior: "smooth"
        })
      })
    },
    loadCategories() {
      setTimeout(async () => {
        this.catalogStore.categories = await getRandomCategoryInfos()
      }, 1000);
    }
  },
  computed: {
    categoryId() {
      return this.$route.params.id as string
    }
  },
  watch: {
    categoryId() {
      this.toCenter()
    }
  },
  mounted() {
    if (this.catalogStore.categories.length == 0) this.loadCategories()
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.subcategory-slider {
  @apply w-full h-12 bg-base-200;
  @apply flex flex-row overflow-auto;
}

.subcategory-item {
  @apply p-2 w-max shrink-0;
}

.subcategory-item.active {
  @apply border-b-2;
}
</style>
