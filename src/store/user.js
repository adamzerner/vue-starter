import Vue from "vue";

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
