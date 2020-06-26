import Home from "@/views/Home/Home.vue";
import SignIn from "@/views/Auth/SignIn/SignIn.vue";
import Register from "@/views/Auth/Register/Register.vue";
import ForgotPassword from "@/views/Auth/ForgotPassword/ForgotPassword.vue";
import ChangePassword from "@/views/Auth/ChangePassword/ChangePassword.vue";
import Account from "@/views/User/Account/Account.vue";
import EditAccount from "@/views/User/EditAccount/EditAccount.vue";
import Help from "@/views/Footer/Help/Help.vue";
import About from "@/views/Footer/About/About.vue";
import Contact from "@/views/Footer/Contact/Contact.vue";

export default [
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
      requiresSignedOut: true,
      title: "VueStarter | Sign In",
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requiresSignedOut: true,
      title: "VueStarter | Register",
    },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
    meta: {
      requiresSignedOut: true,
      title: "VueStarter | Forgot Password",
    },
  },
  {
    path: "/change-password",
    name: "change-password",
    component: ChangePassword,
    meta: {
      requiresSignedIn: true,
      title: "VueStarter | Change Password",
    },
  },
  {
    path: "/account",
    name: "account",
    component: Account,
    meta: {
      requiresSignedIn: true,
      title: "VueStarter | Account",
    },
  },
  {
    path: "/account/edit",
    name: "edit-account",
    component: EditAccount,
    meta: {
      requiresSignedIn: true,
      title: "VueStarter | Edit Account",
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
