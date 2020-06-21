<template>
  <section>
    <page-header>Contact</page-header>
    <strong>Email</strong>
    <p>
      <a href="mailto:adamzerner@protonmail.com">adamzerner@protonmail.com</a>
    </p>
    <strong>Phone</strong>
    <p>
      <a href="tel:516-232-7610">(516) 232-7610</a>
    </p>
    <strong>Location</strong>
    <address>
      320 Conestoga Way Apt #6304 Henderson, NV, 89002
    </address>
  </section>
</template>

<script>
import PageHeader from "@/components/page-header/page-header.vue";

export default {
  name: "contact",
  components: {
    "page-header": PageHeader,
  },
};
</script>

<style lang="scss" scoped></style>
