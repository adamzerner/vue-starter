<template>
  <section>
    <PageHeader>Register</PageHeader>
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
          v-model="$v.form.password.$model"
          v-bind:state="validateState('password')"
          type="text"
        ></BFormInput>
        <BFormInvalidFeedback>
          <span v-if="!$v.form.password.required">
            You forgot to include a new password.
          </span>
          <span v-else-if="!$v.form.password.minLength">
            You're short of the six character requirement.
          </span>
        </BFormInvalidFeedback>
        <template v-slot:description>
          Must be at least six characters
        </template>
      </BFormGroup>
      <SubmitButton
        v-bind:submitting="submitting"
        defaultText="Register"
        submittingText="Registering..."
      />
      <section class="bottom">
        Already have an account?
        <RouterLink to="sign-in">Sign in here.</RouterLink>
      </section>
    </BForm>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import SubmitButton from "@/components/SubmitButton/SubmitButton.vue";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "Register",
  components: {
    PageHeader,
    SubmitButton,
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
