<template>
  <section>
    <PageHeader>Account</PageHeader>
    <pre
      >{{ user }}
</pre
    >
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader.vue";

export default {
  name: "Account",
  components: {
    PageHeader,
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
};
</script>

<style lang="scss" scoped></style>
