<template>
  <section>
    <PageHeader>Contact</PageHeader>
    <BCardGroup deck>
      <BCard title="Email">
        <BCardText>
          <a href="mailto:adamzerner@protonmail.com">
            <BIconEnvelope />
            adamzerner@protonmail.com
          </a>
        </BCardText>
      </BCard>
      <BCard title="Phone">
        <BCardText>
          <a href="tel:516-232-7610">
            <BIconPhone />
            (516) 232-7610
          </a>
        </BCardText>
      </BCard>
      <BCard title="Address">
        <BCardText>
          <address>
            <div>320 Conestoga Way</div>
            <div>Apt #6304</div>
            <div>Henderson, NV, 89002</div>
          </address>
        </BCardText>
      </BCard>
    </BCardGroup>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader.vue";

export default {
  name: "Contact",
  components: {
    PageHeader,
  },
};
</script>

<style lang="scss" scoped></style>
