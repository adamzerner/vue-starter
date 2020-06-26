import Vue from "vue";
import VueRouter from "vue-router";
import VueGtag from "vue-gtag";
import Home from "@/views/Home/Home.vue";
import SignIn from "@/views/Auth/SignIn/SignIn.vue";
import Register from "@/views/Auth/Register/Register.vue";
import ForgotPassword from "@/views/Auth/ForgotPassword/ForgotPassword.vue";
import ChangePassword from "@/views/Auth/ChangePassword/ChangePassword.vue";
import Account from "@/views/Auth/Account/Account.vue";
import Help from "@/views/Footer/Help/Help.vue";
import About from "@/views/Footer/About/About.vue";
import Contact from "@/views/Footer/Contact/Contact.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "VueStarter",
    },
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn,
    meta: {
      title: "VueStarter | Sign In",
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      title: "VueStarter | Register",
    },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
    meta: {
      title: "VueStarter | Forgot Password",
    },
  },
  {
    path: "/change-password",
    name: "change-password",
    component: ChangePassword,
    meta: {
      title: "VueStarter | Change Password",
    },
  },
  {
    path: "/account",
    name: "account",
    component: Account,
    meta: {
      title: "VueStarter | Account",
    },
  },
  {
    path: "/help",
    name: "help",
    component: Help,
    meta: {
      title: "VueStarter | Help",
    },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      title: "VueStarter | About",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: {
      title: "VueStarter | Contact",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  if (store.state.user.user.email === undefined) {
    Vue.axios
      .get("/auth/me")
      .then((res) => {
        return store.commit("user/setUser", res.data.user);
      })
      .catch(() => {
        return store.dispatch("user/clearUser");
      });
  }

  next();
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
