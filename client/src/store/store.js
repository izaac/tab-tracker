import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
  },
  mutations: {
    setToken(state, token) {
      const currentState = state;
      currentState.token = token;
      if (token) {
        currentState.isUserLoggedIn = true;
      } else {
        currentState.isUserLoggedIn = false;
      }
    },
    setUser(state, user) {
      const currentState = state;
      currentState.user = user;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
  },
});
