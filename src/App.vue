<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from "@/components/navbar/navbar.vue";

export default {
  name: "home",
  components: {
    navbar,
  },
};
</script>

<style lang="scss" scoped></style>
