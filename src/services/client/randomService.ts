import type { UCampaignInfo, UCategoryInfo, UProduct } from '@/types/catalog'

export const getRandomImage = (index: number = 0, width: number = 200, height?: number) => {
  return `https://picsum.photos/${width}${height ? '/' + height : ''}?random=${index != 0 ? index : Math.random() * 100}`
}

export const getRandomCategoryInfo = async (index: number = 0) => {
  const title = `category ${index + 1}`
  return {
    id: index,
    name: title,
    seeName: title.replace(' ', '-'),
    thumbnail: getRandomImage(index),
  }
}
export const getRandomCategoryInfos = async (amount: number = 10) => {
  const categories = [] as UCategoryInfo[]
  for (let index = 0; index < amount; index++) {
    categories.push(await getRandomCategoryInfo(index))
  }
  return categories
}

export const getRandomSubCategoryInfos = async (categories: UCategoryInfo[]) => {
  const subCategories = {} as Record<number, UCategoryInfo[]>
  for (let index = 0; index < categories.length; index++) {
    const random = Math.random() * 10
    const amount = Math.floor(random == 0 ? 4 : random)
    subCategories[index] = await getRandomCategoryInfos(amount)
  }
  return subCategories
}

export const getRandomCampaignInfo = async (index: number = 0) => {
  const title = `Campign ${index + 1}`
  return {
    id: index,
    name: title,
    seeName: title.replace(' ', '-'),
    thumbnail: getRandomImage(index, 400, 100),
  }
}

export const getRandomCampainInfos = async (amount: number = 10) => {
  const campaigns = [] as UCampaignInfo[]
  for (let index = 0; index < amount; index++) {
    campaigns.push(await getRandomCampaignInfo(index))
  }
  return campaigns
}

export const getRandomProduct = async (index: number = 0) => {
  const price = Math.floor(Math.random() * 100)
  return {
    id: index,
    name: `product ${index + 1}`,
    oldprice: Math.random() > 0.5 ? 0 : price + Math.floor(Math.random() * 10 + 1),
    price: price == 0 ? 1 : price,
    currency: 'tl',
    thumbnail: getRandomImage(index),
  }
}

export const getRandomProducts = async (amount: number = 10) => {
  const products = [] as UProduct[]
  for (let index = 0; index < amount; index++) {
    products.push(await getRandomProduct(index))
  }
  return products
}

export const getRandomSubCategoryProducts = async (subCategories: UCategoryInfo[]) => {
  const subCategoryProducts = {} as Record<number, UProduct[]>
  for (let index = 0; index < subCategories.length; index++) {
    const random = Math.floor(Math.random() * 30)
    subCategoryProducts[subCategories[index].id] = await getRandomProducts(random == 0 ? 4 : random)
  }
  return subCategoryProducts
}
