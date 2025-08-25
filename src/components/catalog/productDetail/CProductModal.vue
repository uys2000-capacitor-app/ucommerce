<template>
  <Modal ref="modal" id="product-modal" @close="onClose" class="modal-bottom">
    <div class="product-content">
      <div class="flex justify-center relative w-fit mx-auto">
        <ProductImages :images="product.images">
        </ProductImages>
        <div class="product-badge" v-if="hasDiscount">%{{ discount }}⮟</div>
      </div>
      <div>
        <ProductDetail :product="product" />
      </div>
    </div>
  </Modal>
</template>
<script lang="ts">
import { useCatalogStore } from '@/stores/catalog';
import { defineAsyncComponent } from 'vue';
import type CModal from "@/components/common/CModal.vue"
import type { UProductFull } from '@/types/catalog';
import { getDiscount, hasDiscount } from '@/services/client/productUtility';
export default {
  components: {
    Modal: defineAsyncComponent(() => import("@/components/common/CModal.vue")),
    ProductImages: defineAsyncComponent(() => import("@/components/catalog/productDetail/CProductImages.vue")),
    ProductDetail: defineAsyncComponent(() => import("@/components/catalog/productDetail/CProductDetail.vue")),
  },
  data() {
    return {
      catalogStore: useCatalogStore(),
      product: {} as UProductFull,
    }
  },
  methods: {
    getRandomProductImages() {
      const images = [] as string[]
      images.push(this.catalogStore.product.thumbnail)
      for (let index = 0; index < Math.floor(Math.random() * 9) + 1; index++) {
        images.push(`https://picsum.photos/250?random=${index + Math.floor(Math.random() * 100)}`)
      }
      return images
    },
    getRandomAmount() {
      const isCountable = Math.random() >= 0.5
      const counts = [1, 2, 4, 6]
      const amounts = [250, 500, 1000, 1500, 2000]
      const units = ["kg", "gr", "lt", "cm", "m"]
      return {
        count: isCountable ? counts[Math.floor(Math.random() * counts.length)] : 0,
        targetCount: isCountable ? 1 : 0,
        amount: isCountable ? 0 : amounts[Math.floor(Math.random() * amounts.length)],
        targetAmount: isCountable ? 0 : 1000,
        unit: isCountable ? "unit(s)" : units[Math.floor(Math.random() * amounts.length)]
      }
    },
    async getRandomFullProduct() {
      const product = { ...this.catalogStore.product, ...this.getRandomAmount() } as UProductFull
      product.images = this.getRandomProductImages()
      product.description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur expedita ipsam atque accusamus quia aliquam odio vero odit eum voluptas mollitia quaerat nam blanditiis molestiae deleniti omnis tempora quidem, velit ratione commodi magnam reiciendis. Alias sequi iste similique perspiciatis mollitia magni quia, explicabo praesentium obcaecati commodi? Aspernatur alias id quisquam fugit, eius porro placeat tenetur quaerat voluptate voluptatibus consectetur quasi ipsam mollitia! Totam qui asperiores at temporibus, provident praesentium sequi. Quis enim officia placeat asperiores, adipisci totam dolor illum alias dolore aspernatur perspiciatis commodi sed provident nostrum. Quas laboriosam, nesciunt non cupiditate fuga natus illum quisquam sunt consequatur officia!"
      if (Math.random() >= 0.5) product.description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur expedita ipsam atque accusamus quia aliquam odio."
      if (Math.random() >= 0.5) product.description = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      return product;
    },
    show() {
      const modal = this.$refs["modal"] as typeof CModal
      modal.show()
      this.product = { ...this.catalogStore.product, images: [this.catalogStore.product.thumbnail] } as UProductFull
      this.catalogStore.amount = 1
      setTimeout(async () => {
        this.product = await this.getRandomFullProduct()
      }, 1000);
    },
    close() {
      const modal = this.$refs["modal"] as typeof CModal
      modal.close()
    },
    onClose() {
      this.catalogStore.closeProductModal()
    }
  },
  computed: {
    isVisible() {
      return this.catalogStore.isProductModalVisible
    },
    hasDiscount() {
      return hasDiscount(this.product)
    },
    discount() {
      return getDiscount(this.product)
    }
  },
  watch: {
    isVisible() {
      if (this.isVisible) this.show()
      else this.close()
    }
  },
}
</script>

<style scoped>
@reference '@/assets/main.css';

.product-badge {
  @apply absolute top-0 left-0 rounded-box px-1 bg-primary text-primary-content;
}

:slotted(.product-content) {
  @apply flex flex-col gap-2 p-2;
}
</style>
