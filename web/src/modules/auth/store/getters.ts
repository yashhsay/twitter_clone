import { GetterTree } from 'vuex'
import { State, UserData } from './state'

export interface Getters {
  isLoggedIn(state: State): boolean
  getAccessToken(state: State): string
  getUserData(state: State): UserData
}

export const getters: GetterTree<State, State> & Getters = {
  isLoggedIn(state): boolean {
    return state.authStatus.isLoggedIn
  },
  getAccessToken(state): string {
    return state.accessToken
  },
  getUserData(state): UserData {
    return state.user
  },
}