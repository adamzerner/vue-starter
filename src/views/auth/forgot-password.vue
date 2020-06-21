<template>
  <section>
    <page-header>Forgot password</page-header>
    <p>
      Forgot your password? Enter your email below and you'll receive an email
      with instructions for setting a new one.
    </p>
    <b-form>
      <b-form-group label="Email">
        <b-form-input v-model="email" type="email"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" block>
        Reset my password
      </b-button>
    </b-form>
  </section>
</template>

<script>
import PageHeader from "@/components/page-header/page-header.vue";

export default {
  name: "forgot-password",
  components: {
    "page-header": PageHeader,
  },
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
