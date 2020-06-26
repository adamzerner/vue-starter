import store from "@/store";

export default (meta) => {
  const signedIn = store.getters["user/signedIn"];

  if (meta.requiresSignedIn && !signedIn) {
    return "/sign-in?error=not-signed-in";
  }

  if (meta.requiresSignedOut && signedIn) {
    return "/";
  }
};
