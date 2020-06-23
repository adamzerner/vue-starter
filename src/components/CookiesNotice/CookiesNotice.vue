<template>
  <BAlert variant="info" v-bind:show="visible" dismissible>
    This site uses cookies to better understand where visitors are coming from
    and how the site is being used.
    <section class="buttons">
      <BButton variant="light" v-on:click="optOut">Opt out</BButton>
      <BButton variant="primary" class="ok" v-on:click="accept">
        I understand
      </BButton>
    </section>
  </BAlert>
</template>

<script>
export default {
  name: "CookiesNotice",
  data() {
    return {
      visible: !localStorage.getItem("acceptsCookies"),
    };
  },
  methods: {
    optOut() {
      localStorage.setItem("acceptsCookies", "no");
      this.visible = false;
      this.$gtag.optOut();
    },
    accept() {
      localStorage.setItem("acceptsCookies", "yes");
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  border-radius: 0;
  text-align: center;
  margin-bottom: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2147483641;
}

.buttons {
  margin-top: 10px;
}
.ok {
  margin: 0 10px;
}
</style>
