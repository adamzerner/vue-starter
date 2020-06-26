<template>
  <section>
    <PageHeader>Edit Account</PageHeader>
    <Errors v-bind:errors="errorsFromBackend" />
    <BForm v-on:submit.stop.prevent="updateAccount" novalidate>
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
        defaultText="Update account"
        submittingText="Updating account..."
      />
    </BForm>
  </section>
</template>

<script>
import Errors from "@/components/Errors/Errors.vue";
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import SubmitButton from "@/components/SubmitButton/SubmitButton.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "EditAccount",
  components: {
    Errors,
    PageHeader,
    SubmitButton,
  },
  data() {
    return {
      form: {
        email: this.$store.state.user.user.email,
      },
      submitting: false,
      submitAttempted: false,
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
    async updateAccount() {
      this.submitAttempted = true;
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      this.submitting = true;

      try {
        const response = await this.$http.put("/user", {
          user: this.form,
        });
        this.$store.commit("user/setUser", response.data.user);
        this.$router.push("/account");
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
