import createPersistedState from 'vuex-persistedstate'

export default ({
  store
}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      // key: 'yourkey',
      // storage: sessionStorage,  默认为localStorage。
    })(store)
  })
}
