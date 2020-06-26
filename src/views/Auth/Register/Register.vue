<template>
  <section>
    <PageHeader>Register</PageHeader>
    <Errors v-bind:errors="errorsFromBackend" />
    <BForm v-on:submit.stop.prevent="registerWithEmail" novalidate>
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
      <BFormGroup label="Password">
        <BFormInput
          v-model="$v.form.password.$model"
          v-bind:state="validateState('password')"
          v-bind:type="passwordFieldType"
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
          <BFormCheckbox v-model="showPassword">
            <span class="show-password">Show password</span>
          </BFormCheckbox>
          Must be at least six characters
        </template>
      </BFormGroup>
      <SubmitButton
        v-bind:submitting="submitting.email"
        defaultText="Register"
        submittingText="Registering..."
      />
      <hr />
      <SocialButton
        v-bind:submitting="submitting.google"
        defaultText="Register with Google"
        submittingText="Registering with Google..."
        socialIcon="google"
        v-on:click="registerWithGoogle"
      />
      <SocialButton
        v-bind:submitting="submitting.twitter"
        defaultText="Register with Twitter"
        submittingText="Registering with Twitter..."
        socialIcon="twitter"
        v-on:click="registerWithTwitter"
      />
      <SocialButton
        v-bind:submitting="submitting.linkedin"
        defaultText="Register with LinkedIn"
        submittingText="Registering with LinkedIn..."
        socialIcon="linkedin"
        v-on:click="registerWithLinkedIn"
      />
      <hr />
      <section class="bottom">
        Already have an account?
        <RouterLink to="/sign-in">Sign in here.</RouterLink>
      </section>
    </BForm>
  </section>
</template>

<script>
import Errors from "@/components/Errors/Errors.vue";
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import SubmitButton from "@/components/SubmitButton/SubmitButton.vue";
import SocialButton from "@/views/Auth/SocialButton/SocialButton.vue";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "Register",
  components: {
    Errors,
    PageHeader,
    SubmitButton,
    SocialButton,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showPassword: false,
      submitAttempted: false,
      submitting: {
        email: false,
        google: false,
        twitter: false,
        linkedin: false,
      },
      errorsFromBackend: [],
    };
  },
  computed: {
    passwordFieldType() {
      if (this.showPassword) {
        return "text";
      }

      return "password";
    },
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
    async registerWithEmail() {
      this.submitAttempted = true;
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      this.submitting.email = true;

      try {
        const response = await this.$http.post("/auth/register", {
          user: this.form,
        });
        this.$store.commit("user/setUser", response.data.user);
        this.$router.push("/");
      } catch (e) {
        this.errorsFromBackend = [...e.response.data.errors];
      } finally {
        this.submitting.email = false;
      }
    },
    registerWithGoogle() {
      this.submitting.google = true;
      setTimeout(() => {
        this.submitting.google = false;
      }, 1000);
    },
    registerWithTwitter() {
      this.submitting.twitter = true;
      setTimeout(() => {
        this.submitting.twitter = false;
      }, 1000);
    },
    registerWithLinkedIn() {
      this.submitting.linkedin = true;
      setTimeout(() => {
        this.submitting.linkedin = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.show-password {
  vertical-align: middle;
}

.bottom {
  margin-top: 20px;
}

.btn-social {
  margin: 10px 0;
}
</style>
