import Vuex from 'vuex';
import Vue from 'vue';
import availableStatusFilters from '../constants/availableStatusFilters';

Vue.use(Vuex);

const state = {
  availableStatusFilters: availableStatusFilters,
  selectedStatusFilter: 'all',
  fetchedIssues: [
    { title: 'Page changes', favourite: true, date: new Date(2016, 7, 19), status: 'open' },
    { title: 'Review of last issues', favourite: true, date: new Date(2016, 7, 19), status: 'open' },
    { title: 'Visual UI Update Review', favourite: false, date: new Date(2016, 7, 18), status: 'open' },
    { title: 'Sidebar changes', favourite: false, date: new Date(2016, 7, 18), status: 'closed' },
    { title: 'Crash update', favourite: false, date: new Date(2016, 7, 15), status: 'closed' },
    { title: 'Page visual UI Update Review', favourite: true, date: new Date(2016, 7, 15), status: 'open' },
    { title: 'Sidebar update', favourite: false, date: new Date(2016, 7, 15), status: 'open' },
    { title: 'Crash issue', favourite: true, date: new Date(2016, 7, 14), status: 'open' },
    { title: 'Visual update & Crash resolve', favourite: true, date: new Date(2016, 7, 14), status: 'open' },
  ],
};

const store = new Vuex.Store({
  state: state,
  mutations: {
    selectFilter(state, filter) {
      state.selectedStatusFilter = filter;
    },
  },
  actions: {
    selectFilter({ commit }, filter) {
      commit('selectFilter', filter);
    },
  },
  getters: {
    getStatusIssues: state => status => {
      if(status === 'all') {
        return state.fetchedIssues;
      } else {
        return state.fetchedIssues.filter(issue => issue.status === status);
      }
    },
    getSelectedIssues: (state, getters ) => {
      return getters.getStatusIssues(state.selectedStatusFilter);
    },
    getStatusFilterIssuesCount: (state, getters) => status => {
      return getters.getStatusIssues(status).length;
    },
  },
});

export default store;
