<template>
  <section id="app">
    <navbar />
    <section class="container">
      <router-view />
    </section>
    <the-footer />
    <cookies-notice />
  </section>
</template>

<script>
import navbar from "@/components/navbar/navbar.vue";
import CookiesNotice from "@/components/cookies-notice/cookies-notice.vue";
import TheFooter from "@/components/footer/footer.vue";

export default {
  name: "home",
  components: {
    navbar,
    "cookies-notice": CookiesNotice,
    "the-footer": TheFooter,
  },
};
</script>

<style lang="scss" scoped></style>
