<template>
  <section>
    <PageHeader>Create new password</PageHeader>
    <Errors v-bind:errors="errorsFromBackend" />
    <BForm v-on:submit.stop.prevent="submit" novalidate>
      <BFormGroup label="New password">
        <BFormInput
          v-model="$v.form.newPassword.$model"
          v-bind:state="validateState('newPassword')"
          type="text"
        ></BFormInput>
        <BFormInvalidFeedback>
          <span v-if="!$v.form.newPassword.required">
            You forgot to include a new password.
          </span>
          <span v-else-if="!$v.form.newPassword.minLength">
            You're short of the six character requirement.
          </span>
        </BFormInvalidFeedback>
        <template v-slot:description>
          Must be at least six characters
        </template>
      </BFormGroup>
      <SubmitButton
        v-bind:submitting="submitting"
        defaultText="Create new password"
        submittingText="Creating new password..."
      />
    </BForm>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import Errors from "@/components/Errors/Errors.vue";
import SubmitButton from "@/components/SubmitButton/SubmitButton.vue";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "CreateNewPassword",
  components: {
    PageHeader,
    Errors,
    SubmitButton,
  },
  data() {
    return {
      form: {
        newPassword: "",
      },
      submitAttempted: false,
      submitting: false,
      errorsFromBackend: [],
    };
  },
  validations: {
    form: {
      newPassword: {
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
    async submit() {
      const token = this.$route.params.token;

      this.submitAttempted = true;
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      this.submitting = true;

      try {
        await this.$http.patch(`/auth/reset-password/${token}`, this.form);
        alert("You have successfully reset your password.");
        this.$router.push("/sign-in");
        localStorage.setItem("changedPasswordDate", new Date());
      } catch (e) {
        this.errorsFromBackend = [...e.response.data.errors];
      } finally {
        this.submitting = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
