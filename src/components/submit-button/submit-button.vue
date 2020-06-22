<template>
  <b-button type="submit" variant="primary" block v-bind:disabled="submitting">
    {{ submitText }}
  </b-button>
</template>

<script>
export default {
  name: "submit-button",
  props: ["submitting", "defaultText", "submittingText"],
  computed: {
    submitText() {
      if (!this.submitting) {
        return this.defaultText;
      } else {
        return this.submittingText;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
