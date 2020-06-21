<template>
  <section id="app">
    <navbar />
    <section class="container">
      <router-view />
    </section>
  </section>
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
