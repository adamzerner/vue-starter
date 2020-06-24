<template>
  <section>
    <PageHeader>Change password</PageHeader>
    <BForm v-on:submit.stop.prevent="submit" novalidate>
      <BFormGroup label="Old password">
        <BFormInput
          v-model="$v.form.oldPassword.$model"
          v-bind:state="validateState('oldPassword')"
          type="text"
        ></BFormInput>
        <BFormInvalidFeedback>
          You forgot to include your old password.
        </BFormInvalidFeedback>
      </BFormGroup>
      <BFormGroup label="New password">
        <BFormInput
          v-model="$v.form.newPassword.$model"
          v-bind:state="validateState('newPassword')"
          type="text"
          autofocus
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
        defaultText="Change password"
        submittingText="Changing password..."
      />
    </BForm>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import SubmitButton from "@/components/SubmitButton/SubmitButton.vue";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "ChangePassword",
  components: {
    PageHeader,
    SubmitButton,
  },
  data() {
    return {
      form: {
        oldPassword: "",
        newPassword: "",
      },
      submitAttempted: false,
      submitting: false,
    };
  },
  validations: {
    form: {
      oldPassword: {
        required,
      },
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
