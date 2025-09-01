import type { UUser, UAddress } from '@/types/account'
import { defineStore } from 'pinia'

const defaultUser = {
  name: 'Anon',
  email: '',
}
export const useAccountStore = defineStore('account', {
  state() {
    return {
      isLogged: false,
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
    openAddressModal(address: UAddress) {
      this.address = address
      this.isAddressModalVisible = true
    },
  },
  getters: {},
})
