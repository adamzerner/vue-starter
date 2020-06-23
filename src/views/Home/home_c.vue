<template>
  <section>
    <Hero />
    <SocialProof />
    <CTA buttonText="Get a new logo in 24 hours" />
    <Features />
    <CTA buttonText="Start creating your brand" />
  </section>
</template>

<script>
import Hero from "@/views/Home/Hero/Hero.vue";
import SocialProof from "@/views/Home/SocialProof/SocialProof.vue";
import CTA from "@/views/Home/CTA/CTA.vue";
import Features from "@/views/Home/Features/Features.vue";

export default {
  name: "Home",
  components: {
    Hero,
    SocialProof,
    CTA,
    Features,
  },
};
</script>

<style lang="scss" scoped></style>
