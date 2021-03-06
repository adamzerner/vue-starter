import Home from "@/views/Home/Home.vue";
import SignIn from "@/views/Auth/SignIn/SignIn.vue";
import Register from "@/views/Auth/Register/Register.vue";
import ForgotPassword from "@/views/Auth/ForgotPassword/ForgotPassword.vue";
import ChangePassword from "@/views/Auth/ChangePassword/ChangePassword.vue";
import CreateNewPassword from "@/views/Auth/CreateNewPassword/CreateNewPassword.vue";
import Account from "@/views/User/Account/Account.vue";
import EditAccount from "@/views/User/EditAccount/EditAccount.vue";
import Purchase from "@/views/User/Purchase/Purchase.vue";
import Free from "@/views/DomainSpecific/Free/Free.vue";
import Basic from "@/views/DomainSpecific/Basic/Basic.vue";
import Premium from "@/views/DomainSpecific/Premium/Premium.vue";
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
    path: "/account/change-password",
    name: "change-password",
    component: ChangePassword,
    meta: {
      requiresSignedIn: true,
      title: "VueStarter | Change Password",
    },
  },
  {
    path: "/create-new-password/:token",
    name: "create-new-password",
    component: CreateNewPassword,
    meta: {
      requiresSignedOut: true,
      title: "VueStarter | Create New Password",
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
    path: "/purchase",
    name: "purchase",
    component: Purchase,
    meta: {
      requiresSignedIn: true,
      title: "VueStarter | Purchase",
    },
  },
  {
    path: "/free",
    name: "free",
    component: Free,
    meta: {
      title: "VueStarter | Free",
    },
  },
  {
    path: "/basic",
    name: "basic",
    component: Basic,
    meta: {
      requiresPaidBasic: true,
      title: "VueStarter | Basic",
    },
  },
  {
    path: "/premium",
    name: "premium",
    component: Premium,
    meta: {
      requiresPaidPremium: true,
      title: "VueStarter | Premium",
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
