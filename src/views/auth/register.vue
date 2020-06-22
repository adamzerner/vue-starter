<template>
  <section>
    <page-header>Register</page-header>
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
          v-model="$v.form.password.$model"
          v-bind:state="validateState('password')"
          type="text"
        ></b-form-input>
        <b-form-invalid-feedback>
          <span v-if="!$v.form.password.required">
            You forgot to include a new password.
          </span>
          <span v-else-if="!$v.form.password.minLength">
            You're short of the six character requirement.
          </span>
        </b-form-invalid-feedback>
        <template v-slot:description>
          Must be at least six characters
        </template>
      </b-form-group>
      <submit-button
        v-bind:submitting="submitting"
        defaultText="Register"
        submittingText="Registering..."
      />
      <section class="bottom">
        Already have an account?
        <b-link to="sign-in">Sign in here.</b-link>
      </section>
    </b-form>
  </section>
</template>

<script>
import PageHeader from "@/components/page-header/page-header.vue";
import SubmitButton from "@/components/submit-button/submit-button.vue";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "register",
  components: {
    "page-header": PageHeader,
    "submit-button": SubmitButton,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      submitAttempted: false,
      submitting: false,
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
        minLength: minLength(6),
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

      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  margin-top: 20px;
}
</style>
