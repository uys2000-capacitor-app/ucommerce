import type { UProduct, UProductFull } from '@/types/catalog'
export const getPerPrice = (product: UProductFull) => {
  if (product.targetCount == 0 || isNaN(product.targetCount)) return 0
  return ((product.targetCount / product.count) * product.price).toFixed(2)
}
export const getPerPriceForAmount = (product: UProductFull) => {
  if (product.targetAmount == 0 || isNaN(product.targetAmount)) return 0
  return ((product.targetAmount / product.amount) * product.price).toFixed(2)
}
export const hasDiscount = (product: UProduct | UProductFull) => {
  return product.oldprice != product.price && product.oldprice > product.price && product.price != 0
}

export const getDiscount = (product: UProduct | UProductFull) => {
  const discount = product.oldprice - product.price
  return Math.floor((discount / product.oldprice) * 100)
}
