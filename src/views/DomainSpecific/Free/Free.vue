<template>
  <section>
    <PageHeader>Free</PageHeader>
    <p>
      Anyone can access this page. You don't have to have any sort of paid
      account.
    </p>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader.vue";

export default {
  name: "Free",
  components: {
    PageHeader,
  },
};
</script>

<style lang="scss" scoped></style>
