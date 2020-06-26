import Vue from "vue";
import VueGtag from "vue-gtag";

export default (router) => {
  Vue.use(
    VueGtag,
    {
      config: { id: process.env.VUE_APP_GTAG_ID },
      enabled: localStorage.getItem("acceptsCookies") === "no" ? false : true,
    },
    router
  );
};
