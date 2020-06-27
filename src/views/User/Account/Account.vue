<template>
  <section>
    <PageHeader>Account</PageHeader>
    <pre>{{ user }}</pre>
    <h5>Email</h5>
    <p>{{ user.email }}</p>
    <fragment v-if="!usingSSO">
      <p>
        <RouterLink to="/account/edit">Edit your account</RouterLink>
      </p>
      <p>
        <RouterLink to="/account/change-password">
          Change your password
        </RouterLink>
      </p>
    </fragment>
    <AsyncButton
      defaultText="Delete account"
      submittingText="Deleting account..."
      v-bind:submitting="submitting"
      v-bind:buttonProps="buttonProps"
      v-on:click="deleteAccount"
    />
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import AsyncButton from "@/components/AsyncButton/AsyncButton.vue";

export default {
  name: "Account",
  components: {
    PageHeader,
    AsyncButton,
  },
  data() {
    return {
      submitting: false,
      buttonProps: {
        variant: "danger",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
    usingSSO() {
      return this.$store.getters["user/usingSSO"];
    },
  },
  methods: {
    async deleteAccount() {
      try {
        await this.$http.delete("/auth");
        this.$store.dispatch("user/clearUser");
        this.$router.push("/");
        localStorage.removeItem("previousSignInType");
        alert("Your account has been successfully deleted.");
      } catch (e) {
        alert("There was a problem deleting your account.");
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
