<template>
  <BButton
    v-bind="buttonProps"
    v-bind:class="classString"
    v-bind:disabled="submitting"
    v-on:click="$emit('click')"
  >
    <span v-if="socialIcon" v-bind:class="`fa fa-${socialIcon}`"></span>
    {{ submitText }}
  </BButton>
</template>

<script>
export default {
  name: "AsyncButton",
  props: {
    submitting: {
      type: Boolean,
      required: true,
    },
    defaultText: {
      type: String,
      required: true,
    },
    submittingText: {
      type: String,
      required: true,
    },
    classProp: {
      type: String,
      default: "",
    },
    buttonProps: Object,
    socialIcon: String,
  },
  computed: {
    submitText() {
      if (!this.submitting) {
        return this.defaultText;
      } else {
        return this.submittingText;
      }
    },
    classString() {
      let result = this.classProp;

      if (this.socialIcon) {
        if (result.length > 0) {
          result += " ";
        }

        result += `btn-social btn-${this.socialIcon}`;
      }

      return result;
    },
  },
};
</script>

<style lang="scss" scoped></style>
