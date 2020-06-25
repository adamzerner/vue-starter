<template>
  <BAlert variant="danger" v-bind:show="errors.length > 0" dismissable>
    <h4 class="alert-heading">Error</h4>
    <p v-if="errors.length === 1">{{ errors[0] }}</p>
    <ol v-else-if="errors.length > 1">
      <li v-for="(error, i) in errors" v-bind:key="i">{{ error }}</li>
    </ol>
  </BAlert>
</template>

<script>
export default {
  name: "errors",
  props: {
    errors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  margin-top: 20px;
}

ol {
  margin-top: 15px;
  padding-left: 20px;
}
</style>
