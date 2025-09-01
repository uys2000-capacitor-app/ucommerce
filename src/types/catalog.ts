export interface UProductFull {
  id: number
  name: string
  description: string
  oldprice: number
  price: number
  currency: string
  count: number
  targetCount: number
  amount: number
  targetAmount: number
  unit: string
  thumbnail: string
  images: string[]
}
export interface UProduct {
  id: number
  name: string
  oldprice: number
  price: number
  currency: string
  thumbnail: string
}

export interface UCategoryInfo {
  id: number
  name: string
  seeName: string
  thumbnail: string
}

export interface UCampaignInfo {
  id: number
  name: string
  seeName: string
  thumbnail: string
}

export interface UCategory {
  id: number
  title: string
  seeTitle: string
  products: UProduct[]
  page: number
  maxPage: number
}

export type UNotificationType = 'success' | 'info' | 'warning' | 'error'
export interface UNotification {
  id: number
  timeout: number
  label: string
  type: UNotificationType
}
