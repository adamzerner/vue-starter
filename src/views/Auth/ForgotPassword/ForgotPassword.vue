<template>
  <section>
    <PageHeader>Forgot password</PageHeader>
    <p>
      Forgot your password? Enter your email below and you'll receive an email
      with instructions for setting a new one.
    </p>
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
      <SubmitButton
        v-bind:submitting="submitting"
        defaultText="Reset password"
        submittingText="Resetting password..."
      />
    </BForm>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import SubmitButton from "@/components/SubmitButton/SubmitButton.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "ForgotPassword",
  components: {
    PageHeader,
    SubmitButton,
  },
  data() {
    return {
      form: {
        email: "",
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

<style lang="scss" scoped></style>
