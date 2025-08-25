import type { UProduct, UProductFull } from '@/types/catalog'
import { defineStore } from 'pinia'

export const useCardStore = defineStore('card', {
  state() {
    return {
      products: [] as Array<{ amount: number; product: UProduct }>,
    }
  },
  actions: {
    addToCardMultiple(product: UProductFull, amount: number) {
      const target = this.products.find((p) => p.product.id == product.id)
      if (target) target.amount += amount
      else this.products.push({ amount: amount, product: product })
    },
    addToCard(product: UProduct) {
      const target = this.products.find((p) => p.product.id == product.id)
      if (target) target.amount += 1
      else this.products.push({ amount: 1, product: product })
    },
    removeFromCard(product: UProduct) {
      const target = this.products.find((p) => p.product.id == product.id)
      if (target) {
        console.log(target)
        if (target.amount > 1) target.amount -= 1
        else this.products = this.products.filter((p) => p.product.id != product.id)
      }
    },
  },
  getters: {
    price(state) {
      return state.products.map((p) => p.product.price * p.amount).reduce((s, a) => s + a, 0)
    },
    items(state) {
      return state.products.reduce((a, b) => a + b.amount, 0)
    },
  },
})
