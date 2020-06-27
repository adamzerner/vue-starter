<template>
  <section>
    <PageHeader>Basic</PageHeader>
    <p>You can only access this page if:</p>
    <ol>
      <li>You're on the basic plan.</li>
      <li>You're on the premium plan.</li>
      <li>You're still on the free trial.</li>
    </ol>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader.vue";

export default {
  name: "Basic",
  components: {
    PageHeader,
  },
};
</script>

<style lang="scss" scoped></style>
