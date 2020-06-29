<template>
  <section>
    <PageHeader>Purchase</PageHeader>
    <BButton v-on:click="purchaseBasic">Purchase basic plan</BButton>
    <BButton v-on:click="purchasePremium">Purchase premium plan</BButton>
    <p>
      Note: The API keys are in test mode so there is no real money being
      exchanged. Use
      <code>4242 4242 4242 4242</code>
      for the credit card number and whatever else for the other form fields.
    </p>
    <p v-if="environment !== 'production'">
      Note: To test in development you'll need to
      <!-- prettier-ignore -->
      <a href="https://stripe.com/docs/payments/checkout/accept-a-payment#testing-webhooks-locally">
        forward the webhooks to your local server
      </a>
      . The
      <code>yarn forward-stripe-webhook</code>
      script will do that for you if you're using
      <a href="https://github.com/adamzerner/node-starter">NodeStarter</a>
      .
    </p>
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
  computed: {
    environment() {
      return process.env.NODE_ENV;
    },
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

<style lang="scss" scoped>
.btn {
  display: block;
  margin-bottom: 20px;
}
</style>
