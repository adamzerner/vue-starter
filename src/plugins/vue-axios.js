import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

console.log(`process.env.VUE_APP_BASE_URL: ${process.env.VUE_APP_BASE_URL}`);
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Vue.use(VueAxios, axios);
