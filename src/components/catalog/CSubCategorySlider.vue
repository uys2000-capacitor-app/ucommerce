<template>
  <div class="subcategory-slider" v-if="category">
    <template v-for="subCategory, index in subCategories" :key="index">
      <RouterLink class="subcategory-item" :class="{ active: index.toString() === subcategoryId }"
        :to="{ name: 'SubCategoryView', params: { subcategory: subCategory.seeName, subcategoryid: subCategory.id } }"
        @click="() => toSubCategory(subCategory.id)">
        {{ subCategory.name }}
      </RouterLink>
    </template>
  </div>
</template>
<script lang="ts">
import { getRandomSubCategoryInfos } from '@/services/client/randomService';
import { useCatalogStore } from '@/stores/catalog';
import type { UCampaignInfo } from '@/types/catalog';
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
  data() {
    return {
      catalogStore: useCatalogStore(),
      subCategories: [] as UCampaignInfo[],
      toCenterTimeout: 0,
      toSubCategoryTimeout: 0
    }
  },
  methods: {
    toCenter() {
      this.toCenterTimeout = setTimeout(() => {
        const category = document.querySelector('.subcategory-item.active') as HTMLElement
        category?.scrollIntoView({
          block: "center",
          inline: 'center',
          behavior: "smooth"
        })
      })
    },
    toSubCategory(id: number) {
      this.toSubCategoryTimeout = setTimeout(() => {
        const title = document.querySelector(`#subcategory-${id}`) as HTMLElement
        title?.scrollIntoView({
          behavior: "smooth"
        })
      })
    },
    loadSubCategories() {
      setTimeout(async () => {
        this.catalogStore.subCategories = await getRandomSubCategoryInfos(this.catalogStore.categories)
        this.setSubCategories()
      }, 1000);
    },
    setSubCategories() {
      setTimeout(() => {
        const id = parseInt(this.categoryId)
        this.subCategories = this.catalogStore.subCategories[isNaN(id) ? 0 : id]
      });
    }
  },
  errorCaptured() { },
  computed: {
    categories() {
      return this.catalogStore.categories
    },
    category() {
      return (this.$route.params.category ?? "") as string
    },
    categoryId() {
      return (this.$route.params.categoryid ?? "0") as string
    },
    subcategoryId() {
      return (this.$route.params.subcategoryid ?? "0") as string
    }
  },
  watch: {
    categories() {
      this.loadSubCategories()
    },
    categoryId() {
      if (this.categoryId && this.categoryId != "0") this.setSubCategories()
    },
    subcategoryId() {
      if (this.subcategoryId && this.subcategoryId != "0") this.toCenter()
    }
  },
  mounted() {
    if (this.catalogStore.categories.length != 0)
      this.loadSubCategories()
  },
  beforeUnmount() {
    clearTimeout(this.toCenterTimeout)
    clearTimeout(this.toSubCategoryTimeout)
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.subcategory-slider {
  @apply w-full h-12 bg-base-100 shadow mb-2;
  @apply flex flex-row overflow-auto;
}

.subcategory-item {
  @apply p-2 w-max shrink-0;
}

.subcategory-item.active {
  @apply border-b-2;
}
</style>
