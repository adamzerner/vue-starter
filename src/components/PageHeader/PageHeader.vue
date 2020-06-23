<template>
  <header>
    <h2 class="border-bottom"><slot></slot></h2>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 34px;
  margin-bottom: 17px;
  padding-bottom: 7.5px;
}
</style>
