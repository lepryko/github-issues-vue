import Vuex from 'vuex';
import Vue from 'vue';
import availableFilters from '../constants/availableFilters';

Vue.use(Vuex);

const state = {
  availableFilters: availableFilters,
};

const store = new Vuex.Store({
  state: state,
  mutations: {
  },
  actions: {
  },
  getters: {
  },
});

export default store;
