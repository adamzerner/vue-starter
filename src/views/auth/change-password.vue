<template>
  <section>
    <page-header>Change password</page-header>
    <b-form v-on:submit.stop.prevent="submit" novalidate>
      <b-form-group label="Old password">
        <b-form-input
          v-model="$v.form.oldPassword.$model"
          v-bind:state="validateState('oldPassword')"
          type="text"
        ></b-form-input>
        <b-form-invalid-feedback>
          You forgot to include your old password.
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label="New password">
        <b-form-input
          v-model="$v.form.newPassword.$model"
          v-bind:state="validateState('newPassword')"
          type="text"
        ></b-form-input>
        <b-form-invalid-feedback>
          <span v-if="!$v.form.newPassword.required">
            You forgot to include a new password.
          </span>
          <span v-else-if="!$v.form.newPassword.minLength">
            You're short of the six character requirement.
          </span>
        </b-form-invalid-feedback>
        <template v-slot:description>
          Must be at least six characters
        </template>
      </b-form-group>
      <b-button type="submit" variant="primary" block>
        Change password
      </b-button>
    </b-form>
  </section>
</template>

<script>
import PageHeader from "@/components/page-header/page-header.vue";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "change-password",
  components: {
    "page-header": PageHeader,
  },
  data() {
    return {
      form: {
        oldPassword: "",
        newPassword: "",
      },
      submitAttempted: false,
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

      alert("Form submitted!");
    },
  },
};
</script>

<style lang="scss" scoped></style>
