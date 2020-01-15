import {
  USER,
  TITLE,
  BALANCE_EDIT,
} from './mutation-types.js'


export default {
  // 用户名
  [USER](state, data) {
		console.warn(data)
    state.user = data;
  },
  // 标题
  [TITLE](state, data) {
    state.title = data;
  },
  // 商户余额调整
  [BALANCE_EDIT](state, data) {
    state.balanceEdit = data;
  },
}
