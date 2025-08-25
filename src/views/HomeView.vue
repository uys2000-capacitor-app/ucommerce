<template>
  <main>
    <CampainSlider>
      <template v-for="campaign, index in campaigns" :key="index">
        <CampaignBox :campaign="campaign" />
      </template>
    </CampainSlider>
    <CategoryWrapper>
      <template v-for="category, index in catelogStore.categories" :key="index">
        <CategoryBox :category="category" />
      </template>
    </CategoryWrapper>
  </main>
</template>

<script lang="ts">
import { getRandomCampainInfos, getRandomCategoryInfos } from '@/services/client/randomService';
import { defineAsyncComponent } from 'vue';
import type { UCategoryInfo } from '@/types/catalog';
import { useCatalogStore } from '@/stores/catalog';

export default {
  components: {
    CampainSlider: defineAsyncComponent(() => import("@/components/catalog/CCampainSlider.vue")),
    CampaignBox: defineAsyncComponent(() => import("@/components/catalog/CCampaignBox.vue")),
    CategoryWrapper: defineAsyncComponent(() => import("@/components/catalog/CCategoryWrapper.vue")),
    CategoryBox: defineAsyncComponent(() => import("@/components/catalog/CCategoryBox.vue")),
  },
  data() {
    return {
      catelogStore: useCatalogStore(),
      campaigns: [] as UCategoryInfo[],
    }
  },
  mounted() {
    setTimeout(async () => {
      this.campaigns = await getRandomCampainInfos(6)
      console.log(this.campaigns)
      this.catelogStore.categories = await getRandomCategoryInfos(20)
    }, 1000);
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

main {
  @apply flex flex-col gap-2 py-2;
  @apply overflow-auto;
}
</style>
