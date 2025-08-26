import type { UUser, UAddress } from '@/types/account'
import { defineStore } from 'pinia'

const defaultUser = {
  id: 0,
  name: 'Anon',
  phone: '0 555 555 5555',
  email: 'anon@gamil.com',
}
export const useAccountStore = defineStore('account', {
  state() {
    return {
      user: defaultUser as UUser,
      address: {} as UAddress,
      addresses: [] as Array<UAddress>,
      isAddressModalVisible: false,
    }
  },
  actions: {
    closeAddressModal() {
      this.address = {} as UAddress
      this.isAddressModalVisible = false
    },
    openAddressModal(product: UAddress) {
      this.address = product
      this.isAddressModalVisible = true
    },
  },
  getters: {},
})
