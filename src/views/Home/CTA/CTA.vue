<template>
  <section>
    <p v-if="header">{{ header }}</p>
    <BButton variant="primary" size="lg" block to="/register">
      {{ buttonText }}
    </BButton>
  </section>
</template>

<script>
export default {
  name: "CTA",
  props: {
    header: String,
    buttonText: { type: String, default: "Register" },
  },
};
</script>

<style lang="scss" scoped>
section,
p {
  text-align: center;
}
</style>
