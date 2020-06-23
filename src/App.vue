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
import Navbar from "@/components/Navbar/Navbar.vue";
import CookiesNotice from "@/components/CookiesNotice/CookiesNotice.vue";
import TheFooter from "@/components/TheFooter/TheFooter.vue";

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
