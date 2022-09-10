// import * as types from "./../types";
const state = {
  isAuth: false,
  accessToken: "",
  userInfo: {},
  validationRegex: ""
};

const getters = {
  // [types.auth.getters.GET_IS_AUTH]: state => {
  //   return state.isAuth;
  // },
  // [types.auth.getters.GET_ACCESS_TOKEN]: state => {
  //   return state.accessToken;
  // },
  // [types.auth.getters.GET_VALIDATION_REGEX]: state => {
  //   return state.validationRegex;
  // },
  // [types.auth.getters.GET_USER_INFO]: state => {
  //   return state.userInfo;
  // }
};

const mutations = {
  // [types.auth.mutations.MUTATE_CHECK_IS_AUTH]: state => {
  //   // if (localStorage.getItem("accessToken")) {
  //   //   await localStorage.setItem("isAuth", "true");
  //   //   state.isAuth = true;
  //   // } else {
  //   //   await localStorage.setItem("isAuth", "false");
  //   //   state.isAuth = false;
  //   // }
  //   localStorage.getItem("isAuth") === "true"
  //     ? (state.isAuth = true)
  //     : (state.isAuth = false);
  // },
  // [types.auth.mutations.MUTATE_ACCESS_TOKEN]: (state, payload) => {
  //   state.accessToken = payload;
  // },
  // [types.auth.mutations.MUTATE_USER_INFO]: (state, payload) => {
  //   state.userInfo = payload;
  // },
  // [types.auth.mutations.MUTATE_VALIDATION_REGEX]: (state, payload) => {
  //   state.validationRegex = payload;
  // }
};

const actions = {
  // [types.auth.actions.ACTION_CHECK_IS_AUTH]: ({ commit }) => {
  //   commit(types.auth.mutations.MUTATE_CHECK_IS_AUTH);
  // },
  // [types.auth.actions.ACTION_ACCESS_TOKEN]: ({ commit }, payload) => {
  //   commit(types.auth.mutations.MUTATE_ACCESS_TOKEN, payload);
  // },
  // [types.auth.actions.ACTION_USER_INFO]: ({ commit }, payload) => {
  //   commit(types.auth.mutations.MUTATE_USER_INFO, payload);
  // },
  // [types.auth.actions.ACTION_VALIDATION_REGEX]: ({ commit }, payload) => {
  //   commit(types.auth.mutations.MUTATE_VALIDATION_REGEX, payload);
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
