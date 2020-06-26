<template>
  <section>
    <PageHeader>Forgot password</PageHeader>
    <Errors v-bind:errors="errorsFromBackend" />
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
          autofocus
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
import Errors from "@/components/Errors/Errors.vue";
import SubmitButton from "@/components/SubmitButton/SubmitButton.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "ForgotPassword",
  components: {
    PageHeader,
    Errors,
    SubmitButton,
  },
  data() {
    return {
      form: {
        email: "",
      },
      submitAttempted: false,
      submitting: false,
      errorsFromBackend: [],
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
    async submit() {
      this.submitAttempted = true;
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      this.submitting = true;

      try {
        await this.$http.post("/auth/reset-password/", this.form);
      } catch (e) {
        this.errorsFromBackend = [...e.response.data.errors];
      } finally {
        this.submitting = false;
        alert(
          "An email was sent. Please check your email and follow the instructions there to finish resetting your password."
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
