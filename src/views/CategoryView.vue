<template>
  <main>
    <CategorySlider />
    <SubCategorySlider />
    <div class="items">
      <template v-for="product, index in products" :key="index">
        <ProductBox :product="product" />
      </template>
    </div>
    <Pagination :index="page" :max="8" />
  </main>
</template>
<script lang="ts">
import { getRandomProducts } from '@/services/client/randomService';
import { useCatalogStore } from '@/stores/catalog';
import type { UProduct } from '@/types/catalog';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    CategorySlider: defineAsyncComponent(() => import("@/components/catalog/CCategorySlider.vue")),
    Pagination: defineAsyncComponent(() => import("@/components/common/CPagination.vue")),
    ProductBox: defineAsyncComponent(() => import("@/components/catalog/CProductBox.vue"))
  },
  data() {
    return {
      catalogStore: useCatalogStore(),
      products: [] as UProduct[]
    }
  },
  computed: {
    title() {
      const seeTitle = this.$route.params.title as string | undefined
      const title = (seeTitle ?? "").replace("-", " ")
      return title
    },
    page() {
      const pageQuery = this.$route.query.page as string | undefined
      const page = parseInt(pageQuery || "0")
      return isNaN(page) ? 0 : page
    }
  },
  watch: {
    page() {
      this.products = []
      setTimeout(async () => {
        this.products = await getRandomProducts(20)
      }, 1000);
    }
  },
  mounted() {
    setTimeout(async () => {
      this.products = await getRandomProducts(20)
    }, 1000);
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

main {
  @apply flex flex-col gap-1 overflow-hidden h-full grow;
}

h2 {
  @apply text-xl font-bold px-4 pt-2 capitalize border-b border-b-base-300 shadow;
}

.items {
  @apply flex flex-wrap justify-center overflow-auto h-full grow gap-1;
}
</style>
