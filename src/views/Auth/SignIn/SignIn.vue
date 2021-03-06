<template>
  <section>
    <PageHeader>Sign In</PageHeader>
    <Errors v-bind:errors="errorsFromBackend" />
    <BAlert variant="info" v-bind:show="keepMeSignedIn && isSafari">
      You are using Safari. If you want to remain logged in after closing the
      tab, you'll have to enable cross-site tracking: Safari > Preferences >
      Privacy > Website tracking.
    </BAlert>
    <!-- prettier-ignore -->
    <BAlert variant="info" v-bind:show="!!previousSignInType">
      Last time you were here you used
      <strong>{{ previousSignInType }}</strong>
      to sign in<span v-if="previousSignInType === 'email'"> (as opposed to Google, Twitter or LinkedIn)</span>.
    </BAlert>
    <BForm v-on:submit.stop.prevent="signInWithEmail" novalidate>
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
          You forgot to include your password.
        </BFormInvalidFeedback>
        <template v-slot:description>
          <BFormCheckbox v-model="showPassword">
            <span class="show-password">Show password</span>
          </BFormCheckbox>
          <p v-if="daysSincePasswordChange">
            <em>{{ daysSincePasswordChangeText }}</em>
          </p>
        </template>
      </BFormGroup>
      <SubmitButton
        v-bind:submitting="submitting.email"
        defaultText="Sign in"
        submittingText="Signing in..."
      />
      <BFormCheckbox v-model="keepMeSignedIn" class="remember-me">
        Keep me signed in on this computer
      </BFormCheckbox>
      <RouterLink to="/forgot-password">Forgot your password?</RouterLink>
      <hr />
      <SocialButton
        v-bind:submitting="submitting.google"
        defaultText="Sign in with Google"
        submittingText="Signing in with Google..."
        socialIcon="google"
      />
      <SocialButton
        v-bind:submitting="submitting.twitter"
        defaultText="Sign in with Twitter"
        submittingText="Signing in with Twitter..."
        socialIcon="twitter"
      />
      <SocialButton
        v-bind:submitting="submitting.linkedin"
        defaultText="Sign in with LinkedIn"
        submittingText="Signing in with LinkedIn..."
        socialIcon="linkedin"
      />
      <hr />
      <p>
        Don't have an account?
        <RouterLink to="/register">Register here.</RouterLink>
      </p>
    </BForm>
  </section>
</template>

<script>
import Errors from "@/components/Errors/Errors.vue";
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import SubmitButton from "@/components/SubmitButton/SubmitButton.vue";
import SocialButton from "@/views/Auth/SocialButton/SocialButton.vue";
import { required, email } from "vuelidate/lib/validators";
import { getDaysBetweenDates } from "@/utilities";

export default {
  name: "SignIn",
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
      keepMeSignedIn: true,
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
  created() {
    if (this.$route.query.error) {
      if (this.$route.query.error === "email-in-use") {
        this.errorsFromBackend.push(
          "The email you're trying to sign up with is already in use."
        );
      }
    }

    if (this.$route.query.error) {
      if (this.$route.query.error === "not-signed-in") {
        this.errorsFromBackend.push(
          "You must be signed in to access that page."
        );
      }
    }
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
  computed: {
    isSafari() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    },
    previousSignInType() {
      return localStorage.getItem("previousSignInType");
    },
    passwordFieldType() {
      if (this.showPassword) {
        return "text";
      }

      return "password";
    },
    daysSincePasswordChange() {
      let changedPasswordDate = localStorage.getItem("changedPasswordDate");
      let daysSincePasswordChange;

      if (!changedPasswordDate) {
        return null;
      }

      daysSincePasswordChange = getDaysBetweenDates(
        changedPasswordDate,
        new Date()
      );

      if (daysSincePasswordChange > 7) {
        localStorage.removeItem("changedPasswordDate");
        return null;
      }

      return daysSincePasswordChange;
    },
    daysSincePasswordChangeText() {
      if (this.daysSincePasswordChange < 1) {
        return "Note: You changed your password less than 24 hours ago.";
      }

      if (this.daysSincePasswordChange < 1.5) {
        return `Note: You changed your password yesterday.`;
      }

      return `Note: You changed your password ${Math.round(
        this.daysSincePasswordChange
      )} days ago.`;
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
    async signInWithEmail() {
      this.submitAttempted = true;
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      this.submitting.email = true;

      try {
        const response = await this.$http.post("/auth/sign-in", {
          user: this.form,
          keepMeSignedIn: this.keepMeSignedIn,
        });
        localStorage.setItem("previousSignInType", "email");
        this.$store.commit("user/setUser", response.data.user);
        this.$router.push("/");
      } catch (e) {
        this.errorsFromBackend = [...e.response.data.errors];
      } finally {
        this.submitting.email = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.show-password {
  vertical-align: middle;
}

.btn-social {
  margin: 10px 0;
}

.remember-me {
  margin: 10px 0;
}
</style>
