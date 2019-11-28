import Vuex from 'vuex';
import Vue from 'vue';
import availableStatusFilters from '../constants/availableStatusFilters';
import moment from 'moment';
import uuid from 'uuid/v4';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const state = {
  availableStatusFilters: availableStatusFilters,
  selectedStatusFilter: 'all',
  fetchedIssues: [
    { id: uuid(), title: 'Page changes', favourite: true, date: moment('2016-07-19'), status: 'open' },
    { id: uuid(), title: 'Crash update', favourite: false, date: moment('2016-07-15'), status: 'closed' },
    { id: uuid(), title: 'Page visual UI Update Review', favourite: true, date: moment('2016-07-15'), status: 'open' },
    { id: uuid(), title: 'Review of last issues', favourite: true, date: moment('2016-07-19'), status: 'open' },
    { id: uuid(), title: 'Sidebar changes', favourite: false, date: moment('2016-07-18'), status: 'closed' },
    { id: uuid(), title: 'Sidebar update', favourite: false, date: moment('2016-07-15'), status: 'open' },
    { id: uuid(), title: 'Visual UI Update Review', favourite: false, date: moment('2016-07-18'), status: 'open' },
    { id: uuid(), title: 'Crash issue', favourite: true, date: moment('2016-07-14'), status: 'open' },
    { id: uuid(), title: 'Something went wrong', favourite: true, date: moment('2016-07-14'), status: 'open' },
    {
      id: uuid(),
      title: 'Very long description, probably the longest you ever gonna see in you live.',
      favourite: true,
      date: moment('2016-07-14'),
      status: 'open',
    },
    { id: uuid(), title: 'Visual update & Crash resolve', favourite: true, date: moment('2016-07-14'), status: 'open' },
  ],
};

const store = new Vuex.Store({
  state: state,
  mutations: {
    selectFilter(state, filter) {
      state.selectedStatusFilter = filter;
    },
    changeIssueFavouriteStatus(state, id) {
      let foundIssue = state.fetchedIssues.find(issue => issue.id === id);
      foundIssue.favourite = !foundIssue.favourite;
    },
  },
  actions: {
    selectFilter({ commit }, filter) {
      commit('selectFilter', filter);
    },
    changeIssueFavouriteStatus({ commit }, id) {
      commit('changeIssueFavouriteStatus', id);
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
    selectedIssues: (state, getters) => {
      return getters.getStatusIssues(state.selectedStatusFilter);
    },
    getStatusFilterIssuesCount: (state, getters) => status => {
      return getters.getStatusIssues(status).length;
    },
  },
  plugins: [createPersistedState()],
});

export default store;
