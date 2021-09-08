/* eslint-disable */
import VuexPersistence from 'vuex-persist'
import * as Cookies from 'js-cookie'

export default ({ store }) => {
  new VuexPersistence({
    key: 'minerios-website',
    restoreState: (key, storage) => Cookies.getJSON(key),
    saveState: (key, state, storage) =>
      Cookies.set(key, state, {
        expires: 14,
        secure: process.env.NODE_ENV !== 'development',
      }),
  }).plugin(store)
}
