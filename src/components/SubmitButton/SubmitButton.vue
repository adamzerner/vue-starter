<template>
  <BButton type="submit" variant="primary" block v-bind:disabled="submitting">
    {{ submitText }}
  </BButton>
</template>

<script>
export default {
  name: "SubmitButton",
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
