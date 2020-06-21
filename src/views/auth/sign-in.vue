<template>
  <section>
    <page-header>Sign In</page-header>
    <b-form>
      <b-form-group label="Email">
        <b-form-input v-model="email" type="email"></b-form-input>
      </b-form-group>
      <b-form-group label="Password">
        <b-form-input
          v-if="!showPassword"
          v-model="password"
          type="password"
        ></b-form-input>
        <b-form-input
          v-if="showPassword"
          v-model="password"
          type="text"
        ></b-form-input>
        <template v-slot:description>
          <b-form-checkbox v-model="showPassword">
            <span>Show password</span>
          </b-form-checkbox>
        </template>
      </b-form-group>
      <b-button type="submit" variant="primary" block>Sign in</b-button>
      <hr />
      <b-form-checkbox v-model="keepMeSignedIn">
        Keep me signed in on this computer
      </b-form-checkbox>
      <hr />
      <b-link to="forgot-password">Forgot your password?</b-link>
      <hr />
      <p>
        Don't have an account?
        <b-link to="register">Register here.</b-link>
      </p>
    </b-form>
  </section>
</template>

<script>
import PageHeader from "@/components/page-header/page-header.vue";

export default {
  name: "sign-in",
  components: {
    "page-header": PageHeader,
  },
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      keepMeSignedIn: true,
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  vertical-align: middle;
}
</style>
