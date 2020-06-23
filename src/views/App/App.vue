<template>
  <section id="app">
    <Navbar />
    <section class="container">
      <RouterView />
    </section>
    <TheFooter />
    <CookiesNotice />
  </section>
</template>

<script>
import Navbar from "@/views/App/Navbar/Navbar.vue";
import CookiesNotice from "@/views/App/CookiesNotice/CookiesNotice.vue";
import TheFooter from "@/views/App/TheFooter/TheFooter.vue";

export default {
  name: "home",
  components: {
    Navbar,
    CookiesNotice,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped></style>
