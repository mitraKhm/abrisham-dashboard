import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    windowSize: { 'x': 1920, 'y': 976 }
  },
  mutations: {
    updateWindowSize(state, newInfo) {
      state.windowSize = newInfo
    },
    updateUser(state, newInfo) {
      state.user = newInfo;
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    windowSize(state) {
      return state.windowSize;
    },
    user(state) {
      return state.user;
    },
  }
})
