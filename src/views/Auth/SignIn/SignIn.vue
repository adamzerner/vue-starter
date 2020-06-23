<template>
  <section>
    <PageHeader>Sign In</PageHeader>
    <BForm v-on:submit.stop.prevent="submit" novalidate>
      <BFormGroup label="Email">
        <BFormInput
          v-model="$v.form.email.$model"
          v-bind:state="validateState('email')"
          type="email"
        ></BFormInput>
        <BFormInvalidFeedback>
          <span v-if="!$v.form.email.required">
            You forgot to include your email.
          </span>
          <span v-else-if="!$v.form.email.email">
            That is an invalid email address.
          </span>
        </BFormInvalidFeedback>
      </BFormGroup>
      <BFormGroup label="Password">
        <BFormInput
          v-if="!showPassword"
          v-model="$v.form.password.$model"
          v-bind:state="validateState('password')"
          type="password"
        ></BFormInput>
        <BFormInput
          v-if="showPassword"
          v-model="$v.form.password.$model"
          v-bind:state="validateState('password')"
          type="text"
        ></BFormInput>
        <BFormInvalidFeedback>
          You forgot to include your password.
        </BFormInvalidFeedback>
        <template v-slot:description>
          <BFormCheckbox v-model="showPassword">
            <span>Show password</span>
          </BFormCheckbox>
        </template>
      </BFormGroup>
      <SubmitButton
        v-bind:submitting="submitting"
        defaultText="Sign in"
        submittingText="Signing in..."
      />
      <hr />
      <BFormCheckbox v-model="form.keepMeSignedIn">
        Keep me signed in on this computer
      </BFormCheckbox>
      <hr />
      <RouterLink to="forgot-password">Forgot your password?</RouterLink>
      <hr />
      <p>
        Don't have an account?
        <RouterLink to="register">Register here.</RouterLink>
      </p>
    </BForm>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import SubmitButton from "@/components/SubmitButton/SubmitButton.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "SignIn",
  components: {
    PageHeader,
    SubmitButton,
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
span {
  vertical-align: middle;
}
</style>
