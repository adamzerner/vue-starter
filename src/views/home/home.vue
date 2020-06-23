<template>
  <section>
    <hero />
    <social-proof />
    <cta buttonText="Get a new logo in 24 hours" />
    <features />
    <cta buttonText="Start creating your brand" />
  </section>
</template>

<script>
import Hero from "@/views/home/hero.vue";
import SocialProof from "@/views/home/social-proof.vue";
import CTA from "@/views/home/cta.vue";
import Features from "@/views/home/features.vue";

export default {
  name: "home",
  components: {
    hero: Hero,
    "social-proof": SocialProof,
    cta: CTA,
    features: Features,
  },
};
</script>

<style lang="scss" scoped></style>
