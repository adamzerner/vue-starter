<template>
  <section>
    <page-header>Forgot password</page-header>
    <p>
      Forgot your password? Enter your email below and you'll receive an email
      with instructions for setting a new one.
    </p>
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
      <b-button type="submit" variant="primary" block>
        Reset my password
      </b-button>
    </b-form>
  </section>
</template>

<script>
import PageHeader from "@/components/page-header/page-header.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "forgot-password",
  components: {
    "page-header": PageHeader,
  },
  data() {
    return {
      form: {
        email: "",
      },
      submitAttempted: false,
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
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

<style lang="scss" scoped></style>
