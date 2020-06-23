<template>
  <section>
    <p v-if="header">{{ header }}</p>
    <b-button variant="primary" size="lg" block to="register">
      {{ buttonText }}
    </b-button>
  </section>
</template>

<script>
export default {
  name: "cta",
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
