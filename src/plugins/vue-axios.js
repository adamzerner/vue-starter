import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.interceptors.request.use(
  function(config) {
    config.withCredentials = true;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
Vue.use(VueAxios, axios);
