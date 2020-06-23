<template>
  <section>
    <PageHeader>Contact</PageHeader>
    <BCardGroup deck>
      <BCard title="Email">
        <BCardText>
          <a href="mailto:adamzerner@protonmail.com">
            <BIconEnvelope />
            foo@bar.com
          </a>
        </BCardText>
      </BCard>
      <BCard title="Phone">
        <BCardText>
          <a href="tel:516-232-7610">
            <BIconPhone />
            (123) 456-7890
          </a>
        </BCardText>
      </BCard>
      <BCard title="Address">
        <BCardText>
          <address>
            <div>123 Main Street</div>
            <div>PO Box #123</div>
            <div>Los Angeles, CA, 12345</div>
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
