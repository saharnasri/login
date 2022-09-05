import axios from "axios";
import authService from "../modules/authService";
import Vue from "vue";
import router from "@/router/index";
import i18n from "@/plugins/i18n";

// import store from "../../store";

const headers = {
  "content-type": "application/json",
  Accept: "application/json",
  "Accept-Language": "fa",
  version: "1000"
};

const API_V3 = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_V3,
  headers: headers
});

const API_V4 = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_V4,
  headers: headers
});

const API_DEV = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_DEV,
  headers: headers
});

API_DEV.interceptors.request.use(
  config => {
    const token = authService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

API_V4.interceptors.request.use(
  config => {
    config.headers["Accept-Language"] = i18n.locale;
    const token = authService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
API_V3.interceptors.request.use(
  config => {
    const token = authService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

API_V4.interceptors.response.use(
  response => {
    return response;
  },
  async function(error) {
    if (error.response.status >= 500) {
      router.push({
        name: "error-page",
        params: { errorBody: error.response }
      });
    }
    if (error.response.status === 401 && (error.response.data.code === "auth_token_invalid" || error.response.data.code === "user_blocked")) {
      await localStorage.setItem("isAuth", "false");
      await localStorage.removeItem("accessToken");
      window.location = `${process.env.VUE_APP_BASE_URL}/auth/login`;
      this.$cookies.remove(
        "accessToken",
        null,
        process.env.VUE_APP_COOKIES_DOMAIN
      );
    }

    if (error && error.response.config.method !== "get") {
      Vue.$toast.clear();

      Vue.$toast.updateDefaults({
        rtl: localStorage.getItem("direction") === "rtl" || true
      });
      // Vue.$toast.updateDefaults({rtl :  Vue.$vuetify.rtl});
      if (Object.entries(error.response.data.errors).length > 0) {
        Object.values(error.response.data.errors).forEach(value => {
          Vue.$toast.error(value[0]);
        });
      } else if (
        !error.response.data.errors ||
        error.response.data.errors.length === 0
      ) {
        Vue.$toast.error(error.response.data.message);
      }
    }
    return Promise.reject(error.response);
  }
);
// API_V4.interceptors.response.use(
//   response => {
//     return response;
//   },
//   function(error) {
//     if (error.response.status === 401) {
//       localStorage.setItem("isAuth", "false");
//       localStorage.removeItem("accessToken");
//       store.commit("checkIsAuth");
//       location.reload();
//     }
//     return Promise.reject(error.response);
//   }
// );

export { API_V3, API_V4, API_DEV };
