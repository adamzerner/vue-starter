<template>
  <section>
    <page-header>Sign In</page-header>
    <b-form v-on:submit.stop.prevent="submit" novalidate>
      <b-form-group label="Email">
        <b-form-input
          v-model="$v.form.email.$model"
          v-bind:state="validateState('email')"
          type="email"
        ></b-form-input>
        <b-form-invalid-feedback>
          <span v-if="!$v.form.email.required">
            You forgot to include your email.
          </span>
          <span v-else-if="!$v.form.email.email">
            That is an invalid email address.
          </span>
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label="Password">
        <b-form-input
          v-if="!showPassword"
          v-model="$v.form.password.$model"
          v-bind:state="validateState('password')"
          type="password"
        ></b-form-input>
        <b-form-input
          v-if="showPassword"
          v-model="$v.form.password.$model"
          v-bind:state="validateState('password')"
          type="text"
        ></b-form-input>
        <b-form-invalid-feedback>
          You forgot to include your password.
        </b-form-invalid-feedback>
        <template v-slot:description>
          <b-form-checkbox v-model="showPassword">
            <span>Show password</span>
          </b-form-checkbox>
        </template>
      </b-form-group>
      <b-button type="submit" variant="primary" block>Sign in</b-button>
      <hr />
      <b-form-checkbox v-model="form.keepMeSignedIn">
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
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "sign-in",
  components: {
    "page-header": PageHeader,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        keepMeSignedIn: true,
      },
      showPassword: false,
      submitAttempted: false,
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];

      if (this.submitAttempted && $dirty && $error) {
        return false;
      }

      return null;
    },
    submit() {
      this.submitAttempted = true;
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  vertical-align: middle;
}
</style>
