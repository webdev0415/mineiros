import { Middleware } from '@nuxt/types'

const NavigationGuard: Middleware = ({ store }) => {
  // Close menus on pageload if opened
  store.getters.showNavigation === true && store.dispatch('closeNavigation')
  store.getters.showSolutionsMenu === true &&
    store.dispatch('closeSolutionsMenu')
}

export default NavigationGuard
