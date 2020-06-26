import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import routes from "./routes";
import checkPermission from "./check-permission";
import setUpAnalytics from "./set-up-analytics";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title;

  if (store.state.user.user.email === undefined) {
    try {
      const response = await Vue.axios.get("/auth/me");

      store.commit("user/setUser", response.data.user);
    } catch (e) {
      store.dispatch("user/clearUser");
    }
  }

  const fallbackPath = checkPermission(to.meta);

  if (fallbackPath) {
    return next(fallbackPath);
  }

  next();
});

if (process.env.NODE_ENV === "production") {
  setUpAnalytics(router);
}

export default router;
