import type { UCategoryInfo, UProduct } from '@/types/catalog'
import { defineStore } from 'pinia'

export const useCatalogStore = defineStore('catalog', {
  state() {
    return {
      amount: 1,
      product: {} as UProduct,
      categories: [] as UCategoryInfo[],
      isProductModalVisible: false,
    }
  },
  actions: {
    closeProductModal() {
      this.product = {} as UProduct
      this.isProductModalVisible = false
    },
    openProductModal(product: UProduct) {
      this.product = product
      this.isProductModalVisible = true
    },
  },
})
