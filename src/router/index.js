import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/home.vue";
import About from "@/views/info/about.vue";
import SignIn from "@/views/auth/sign-in.vue";
import Register from "@/views/auth/register.vue";
import ForgotPassword from "@/views/auth/forgot-password.vue";
import ChangePassword from "@/views/auth/change-password.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
