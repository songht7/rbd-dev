import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: false,
};

const mutations = {
  setLoading(state, data) {
    state.loading = data;
  },
};

const actions = {
  setLoading: ({
    commit
  }, data) => {
    commit('setLoading', data);
  },
};

const getters = {
  getLoading: (state) => {
    return state.loading;
  },
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
})
