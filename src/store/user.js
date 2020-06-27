import Vue from "vue";
import { getDaysBetweenDates } from "@/utilities";

export default {
  namespaced: true,
  state: () => ({
    user: {},
  }),
  getters: {
    signedIn(state) {
      return !!state.user.email;
    },
    usingSSO(state) {
      return (
        state.user.googleId || state.user.twitterId || state.user.linkedinId
      );
    },
    authorizedForBasic(state, getters) {
      if (!getters.signedIn || !state.user.auth) {
        return false;
      }

      return (
        getters.daysLeftOnFreeTrial > 0 ||
        state.user.auth.includes("basic") ||
        state.user.auth.includes("premium")
      );
    },
    authorizedForPremium(state, getters) {
      if (!getters.signedIn || !state.user.auth) {
        return false;
      }

      return (
        getters.daysLeftOnFreeTrial > 0 || state.user.auth.includes("premium")
      );
    },
    daysLeftOnFreeTrial(state, getters) {
      const DAYS_FOR_FREE_TRIAL = 14;

      if (!state.user.created) {
        return 0;
      }

      const raw = DAYS_FOR_FREE_TRIAL - getters.daysSinceSignup;
      const rounded = Number(raw.toFixed(2));

      return rounded;
    },
    daysSinceSignup(state) {
      if (!state.user.created) {
        throw new Error(
          "Trying to figure out daysSinceSignup for someone who isn't logged in."
        );
      }

      return getDaysBetweenDates(state.user.created, new Date());
    },
  },
  actions: {
    clearUser(context) {
      return Vue.axios
        .get("/auth/default")
        .then((res) => {
          return context.commit("setUser", res.data.user);
        })
        .catch(() => {
          alert("Error. Problem clearing/setting the user.");
        });
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = { ...user };
    },
  },
};
