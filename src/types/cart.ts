import type { UAddress } from './account'
import type { UProduct } from './catalog'

export interface UCartProduct {
  amount: number
  product: UProduct
}

export interface UCartOrder {
  timestamp: number
  address: UAddress
  products: UCartProduct[]
}
