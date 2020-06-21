<template>
  <section>
    <page-header>Register</page-header>
    <b-form v-on:submit="register" novalidate>
      <b-form-group label="Email">
        <b-form-input v-model="email" type="email"></b-form-input>
      </b-form-group>
      <b-form-group label="Password">
        <b-form-input v-model="password" type="text"></b-form-input>
        <template v-slot:description>
          Must be at least six characters
        </template>
      </b-form-group>
      <b-button type="submit" variant="primary" block>Register</b-button>
      <section class="bottom">
        Already have an account?
        <b-link to="sign-in">Sign in here.</b-link>
      </section>
    </b-form>
  </section>
</template>

<script>
import PageHeader from "@/components/page-header/page-header.vue";

export default {
  name: "register",
  components: {
    "page-header": PageHeader,
  },
  data() {
    return {
      email: "",
      password: "",
      submitAttempted: false,
    };
  },
  methods: {
    submit() {},
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  margin-top: 20px;
}
</style>
