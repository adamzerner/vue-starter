import store from "@/store";

export default (meta) => {
  const signedIn = store.getters["user/signedIn"];

  if (meta.requiresSignedIn && !signedIn) {
    return "/sign-in?error=not-signed-in";
  }

  if (meta.requiresSignedOut && signedIn) {
    return "/";
  }

  if (meta.requiresPaidBasic && !store.getters["user/authorizedForBasic"]) {
    return "/";
  }

  if (meta.requiresPaidPremium && !store.getters["user/authorizedForPremium"]) {
    return "/";
  }
};
