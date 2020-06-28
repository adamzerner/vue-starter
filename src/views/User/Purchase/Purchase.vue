<template>
  <section>
    <PageHeader>Purchase</PageHeader>
    <BButton v-on:click="purchaseBasic">Purchase basic plan</BButton>
    <br />
    <br />
    <BButton v-on:click="purchasePremium">Purchase premium plan</BButton>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import { loadStripe } from "@stripe/stripe-js";

export default {
  name: "Purchase",
  components: {
    PageHeader,
  },
  async created() {
    this.stripe = await loadStripe(process.env.VUE_APP_STRIPE_CONSUMER_KEY);
  },
  data() {
    return {
      stripe: null,
      errorsFromBackend: [],
    };
  },
  methods: {
    async purchaseBasic() {
      const response = await this.$http.post("/user/checkout-session", {
        plan: "basic",
      });
      const { error } = await this.stripe.redirectToCheckout({
        sessionId: response.data.sessionId,
      });

      if (error) {
        this.setErrorsFromBackend(error.message);
      }
    },
    async purchasePremium() {
      const response = await this.$http.post("/user/checkout-session", {
        plan: "premium",
      });
      const { error } = await this.stripe.redirectToCheckout({
        sessionId: response.data.sessionId,
      });

      if (error) {
        this.setErrorsFromBackend(error.message);
      }
    },
    setErrorsFromBackend(errorMessage) {
      this.errorsFromBackend.length = 0; // empty the array
      this.errorsFromBackend.push(errorMessage);
    },
  },
};
</script>

<style lang="css" scoped></style>
