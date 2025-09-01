import { UAuthPath, UAuthService, USessionPath, USessionService } from '@uys2000/u-auth'
import type { UPlatform } from '@uys2000/u-auth/src/classes/usession'
import { UHost, type Environment } from '@uys2000/u-host'

let uAuthService: UAuthService
let uSessionService: USessionService

export const getAuthService = () => uAuthService
export const getSessionService = () => uSessionService

export const initUAuthService = (token?: string) => {
  const env = (import.meta.env.VITE_ENVIRONMENT || 'test') as Environment
  uAuthService = new UAuthService(new UHost(env, 'auth'), new UAuthPath(), token)
  uSessionService = new USessionService(new UHost(env, 'session'), new USessionPath(), token)
}

export const signUp = async (
  name: string,
  email: string,
  password: string,
  platform: UPlatform,
) => {
  const response = await uAuthService.signUp(name, email, password, platform)
  uSessionService.token = response.token
  return response
}

export const signIn = async (email: string, password: string, platform: UPlatform) => {
  const response = await uAuthService.signIn(email, password, platform)
  uSessionService.token = response.token
  return response
}

export const signOut = async () => {
  const result = await uAuthService.signOut()
  uSessionService.token = ''
  return result
}

export const signoff = async (email: string, password: string, platform: UPlatform) => {
  const result = await uAuthService.signOff(email, password, platform)
  uSessionService.token = ''
  return result
}

export const check = async () => {
  const result = await uSessionService.check()
  return result
}
export const list = async () => {
  const result = await uSessionService.list()
  return result
}
export const remove = async (token: string) => {
  const result = await uSessionService.remove(token)
  return result
}
