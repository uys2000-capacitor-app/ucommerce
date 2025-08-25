<template>
  <main>
    <CategorySlider />
    <SubCategorySlider />
    <SubCategoryList>
      <template v-for="subCategoryId, index in Object.keys(subCategoryProducts)" :key="index">
        <SubCategory :sub-category="subCategories.find(s => s.id.toString() == subCategoryId)">
          <template v-for="product, productIndex in subCategoryProducts[parseInt(subCategoryId)]" :key="productIndex">
            <ProductBox :product="product" />
          </template>
        </SubCategory>
      </template>
    </SubCategoryList>
  </main>
</template>
<script lang="ts">
import { getRandomSubCategoryProducts } from '@/services/client/randomService';
import { useCatalogStore } from '@/stores/catalog';
import type { UProduct } from '@/types/catalog';
import { defineAsyncComponent } from 'vue';


export default {
  components: {
    CategorySlider: defineAsyncComponent(() => import("@/components/catalog/CCategorySlider.vue")),
    SubCategorySlider: defineAsyncComponent(() => import("@/components/catalog/CSubCategorySlider.vue")),
    SubCategoryList: defineAsyncComponent(() => import("@/components/catalog/CSubCategoryList.vue")),
    SubCategory: defineAsyncComponent(() => import("@/components/catalog/CSubCategory.vue")),
    ProductBox: defineAsyncComponent(() => import("@/components/catalog/CProductBox.vue")),
  },
  data() {
    return {
      catalogStore: useCatalogStore(),
      subCategoryProducts: {} as Record<number, UProduct[]>
    }
  },
  methods: {

  },
  computed: {
    categoryId() {
      return (this.$route.params.categoryid ?? "0") as string
    },
    subcategoryId() {
      return (this.$route.params.subcategoryid ?? "0") as string
    },
    subCategories() {
      if (Object.keys(this.catalogStore.subCategories).length == 0) return []
      const id = parseInt(this.categoryId)
      return this.catalogStore.subCategories[id ?? 0]
    }
  },
  watch: {
    subCategories() {
      this.subCategoryProducts = {}
      setTimeout(async () => this.subCategoryProducts = await getRandomSubCategoryProducts(this.subCategories), 4000);
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

main {
  @apply flex flex-col overflow-hidden h-full grow;
}

h2 {
  @apply text-xl font-bold px-4 pt-2 capitalize border-b border-b-base-300 shadow;
}

.items {
  @apply flex flex-wrap justify-center overflow-auto h-full grow gap-1;
}
</style>
