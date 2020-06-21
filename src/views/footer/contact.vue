<template>
  <section>
    <page-header>Contact</page-header>
    <b-card-group deck>
      <b-card title="Email">
        <b-card-text>
          <a href="mailto:adamzerner@protonmail.com">
            <b-icon-envelope />
            adamzerner@protonmail.com
          </a>
        </b-card-text>
      </b-card>
      <b-card title="Phone">
        <b-card-text>
          <a href="tel:516-232-7610">
            <b-icon-phone />
            (516) 232-7610
          </a>
        </b-card-text>
      </b-card>
      <b-card title="Address">
        <b-card-text>
          <address>
            <div>320 Conestoga Way</div>
            <div>Apt #6304</div>
            <div>Henderson, NV, 89002</div>
          </address>
        </b-card-text>
      </b-card>
    </b-card-group>
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
