import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins";
import "@/assets/app.scss";
import App from "./views/App/App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
