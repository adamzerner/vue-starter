<template>
  <section class="feature">
    <b-row>
      <b-col md>
        <h3>{{ header }}</h3>
        <p>{{ paragraph }}</p>
      </b-col>
      <b-col md>
        <b-img v-bind:src="image" fluid-grow alt="Fluid-grow image"></b-img>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: "feature",
  props: ["header", "paragraph", "image"],
};
</script>

<style lang="scss" scoped>
.feature {
  margin: 75px 0;
}
</style>
