import axios from "axios";
// import router from "@/router/index";
// import i18n from "@/plugins/i18n";

// const headers = {
//   "Content-Type": "application/json",
//   Accept: "application/json",
//   "Accept-Language": "fa",
//   version: "1000"
// };

const API = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // headers: headers
});


// API.interceptors.request.use(
//   config => {
//     config.headers["Accept-Language"] = i18n.locale;
//     return config;
//   },
//   error => {
//     Promise.reject(error);
//   }
// );
// API.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async function(error) {
//     if (error.response.status === 500) {
//       router.push({
//         name: "error-page",
//         params: { errorBody: error.response }
//       });
//     }
//     return Promise.reject(error.response);
//   }
// );

export { API };
