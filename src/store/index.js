import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import auth from "./modules/auth";
import account from "./modules/account";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    account,
  }
});
