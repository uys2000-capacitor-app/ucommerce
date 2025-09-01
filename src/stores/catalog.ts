import type { UCategoryInfo, UNotification, UNotificationType, UProduct } from '@/types/catalog'
import { defineStore } from 'pinia'

export const useCatalogStore = defineStore('catalog', {
  state() {
    return {
      amount: 1,
      product: {} as UProduct,
      categories: [] as UCategoryInfo[],
      subCategories: {} as Record<number, UCategoryInfo[]>,
      notifications: [] as UNotification[],
      isLogged: false,
      user: { name: '', email: '' },
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
    addNotification(label: string, type: UNotificationType, timeout: number = 0) {
      this.notifications.push({ id: Date.now(), timeout, label, type })
    },
    removeNotification(id: number) {
      this.notifications = this.notifications.filter((n) => n.id != id)
    },
  },
})
