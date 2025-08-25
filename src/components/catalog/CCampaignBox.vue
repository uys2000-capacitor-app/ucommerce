<template>
  <router-link :to="{}" class="campaign-box">
    <img class="campaign-img" :src="campaign.thumbnail" :alt="`Image of ${campaign.name}`">
    <span class="campaign-name">{{ campaign.name }}</span>
  </router-link>
</template>
<script lang="ts">
import type { UCampaignInfo } from '@/types/catalog';
import type { PropType } from 'vue';

export default {
  props: {
    campaign: {
      type: Object as PropType<UCampaignInfo>,
      required: true
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

.campaign-box {
  @apply block relative w-full h-[40vw];
}

.campaign-name {
  @apply text-base-content bg-base-100/40;
  @apply w-full text-nowrap overflow-ellipsis overflow-hidden;
  @apply absolute bottom-0 left-0;
}

.campaign-img {
  @apply relative w-full h-[40vw];
}
</style>
