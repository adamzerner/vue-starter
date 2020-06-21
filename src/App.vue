<template>
  <section id="app">
    <navbar />
    <section class="container">
      <router-view />
    </section>
    <the-footer />
  </section>
</template>

<script>
import navbar from "@/components/navbar/navbar.vue";
import footer from "@/components/footer/footer.vue";

export default {
  name: "home",
  components: {
    navbar,
    "the-footer": footer,
  },
};
</script>

<style lang="scss" scoped></style>
