import Vue from "vue";
import VueRouter from "vue-router";
import VueGtag from "vue-gtag";
import Home from "@/views/Home/Home.vue";
import SignIn from "@/views/Auth/SignIn/SignIn.vue";
import Register from "@/views/Auth/Register/Register.vue";
import ForgotPassword from "@/views/Auth/ForgotPassword/ForgotPassword.vue";
import ChangePassword from "@/views/Auth/ChangePassword/ChangePassword.vue";
import Help from "@/views/Footer/Help/Help.vue";
import About from "@/views/Footer/About/About.vue";
import Contact from "@/views/Footer/Contact/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/change-password",
    name: "change-password",
    component: ChangePassword,
  },
  {
    path: "/help",
    name: "help",
    component: Help,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

if (process.env.NODE_ENV === "production") {
  Vue.use(
    VueGtag,
    {
      config: { id: process.env.VUE_APP_GTAG_ID },
      enabled: localStorage.getItem("acceptsCookies") === "no" ? false : true,
    },
    router
  );
}

export default router;
