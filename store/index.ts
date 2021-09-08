import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  showNavigation: false,
  showSolutionsMenu: false,
  cookieConsent: false,
  showCookieConsentHint: true,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  showNavigation: (state) => state.showNavigation,
  showSolutionsMenu: (state) => state.showSolutionsMenu,
  cookieConsent: (state) => state.cookieConsent,
  showCookieConsentHint: (state) => state.showCookieConsentHint,
}

export const mutations: MutationTree<RootState> = {
  SET_SHOW_NAVIGATION: (state, showNavigation: boolean) =>
    (state.showNavigation = showNavigation),
  SET_SHOW_SOLUTIONS_MENU: (state, showSolutionsMenu) =>
    (state.showSolutionsMenu = showSolutionsMenu),
  SET_COOKIE_CONSENT: (state, cookieConsent) =>
    (state.cookieConsent = cookieConsent),
  SET_SHOW_COOKIE_CONSENT_HINT: (state, showCookieConsentHint) =>
    (state.showCookieConsentHint = showCookieConsentHint),
}

export const actions: ActionTree<RootState, RootState> = {
  toggleNavigation({ commit }) {
    commit('SET_SHOW_NAVIGATION', !this.state.showNavigation)
  },
  closeNavigation({ commit }) {
    commit('SET_SHOW_NAVIGATION', false)
  },
  toggleSolutionsMenu({ commit }) {
    commit('SET_SHOW_SOLUTIONS_MENU', !this.state.showSolutionsMenu)
  },
  closeSolutionsMenu({ commit }) {
    commit('SET_SHOW_SOLUTIONS_MENU', false)
  },
  enableCookies({ commit }) {
    commit('SET_COOKIE_CONSENT', true)
  },
  disableCookies({ commit }) {
    commit('SET_COOKIE_CONSENT', false)
  },
  hideCookieConsentHint({ commit }) {
    commit('SET_SHOW_COOKIE_CONSENT_HINT', false)
  },
}
