import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
// import actions from './action'
// import getters from './getters'

Vue.use(Vuex)

const state = {
  user: null,
  balanceEdit: null, //商户余额调整
  title: null, //标题
}


export default () => {
  return new Vuex.Store({
    state,
    // getters,
    // actions,
    mutations,
  })
}
