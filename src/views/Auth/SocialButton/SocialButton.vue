<template>
  <AsyncButton
    v-bind:submitting="submitting"
    v-bind:defaultText="defaultText"
    v-bind:submittingText="submittingText"
    v-bind:socialIcon="socialIcon"
    v-bind:buttonProps="buttonProps"
    v-on:click="$emit('click')"
  />
</template>

<script>
import AsyncButton from "@/components/AsyncButton/AsyncButton.vue";

export default {
  name: "SocialButton",
  props: ["submitting", "defaultText", "submittingText", "socialIcon"],
  components: {
    AsyncButton,
  },
  data() {
    return {
      buttonProps: {
        block: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/bootstrap-social.css";

.btn {
  text-align: center;
}

.btn-social > :first-child {
  line-height: 39px;
  font-size: 1.4em;
  width: 50px;
}
</style>
