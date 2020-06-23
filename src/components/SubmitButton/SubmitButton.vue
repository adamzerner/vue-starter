<template>
  <AsyncButton
    v-bind:submitting="submitting"
    v-bind:defaultText="defaultText"
    v-bind:submittingText="submittingText"
    v-bind:buttonProps="buttonProps"
  />
</template>

<script>
import AsyncButton from "@/components/AsyncButton/AsyncButton.vue";

export default {
  name: "SubmitButton",
  props: ["submitting", "defaultText", "submittingText"],
  components: {
    AsyncButton,
  },
  data() {
    return {
      buttonProps: {
        type: "submit",
        variant: "primary",
        block: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
