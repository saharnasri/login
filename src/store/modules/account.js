import * as types from "@/store/types";

const state = {
  selectedTab: 0,
  isSidebarOpen: false,
  show2FA: false
};

const getters = {
  [types.account.getters.IS_SIDEBAR_OPEN]: state => {
    return state.isSidebarOpen;
  },
  [types.account.getters.SELECTED_TAB]: state => {
    return state.selectedTab;
  },
  [types.account.getters.SHOW_2FA]: state => {
    return state.show2FA;
  }
};

const mutations = {
  [types.account.mutations.MUTATE_SIDEBAR]: (state, payload) => {
    state.isSidebarOpen = payload;
  },
  [types.account.mutations.MUTATE_TAB]: (state, payload) => {
    state.selectedTab = payload;
  },
  [types.account.mutations.MUTATE_SHOW_2FA]: (state, payload) => {
    state.show2FA = payload;
  }
};

const actions = {
  [types.account.actions.SET_SIDEBAR]: ({ commit }, payload) => {
    commit(types.account.mutations.MUTATE_SIDEBAR, payload);
  },
  [types.account.actions.SET_TAB]: ({ commit }, payload) => {
    commit(types.account.mutations.MUTATE_TAB, payload);
  },
  [types.account.actions.SET_SHOW_2FA]: ({ commit }, payload) => {
    commit(types.account.mutations.MUTATE_SHOW_2FA, payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
