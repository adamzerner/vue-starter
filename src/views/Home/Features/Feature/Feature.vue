<template>
  <section class="feature">
    <BRow>
      <BCol md>
        <h3>{{ header }}</h3>
        <p>{{ paragraph }}</p>
      </BCol>
      <BCol md>
        <BImg v-bind:src="image" fluid-grow alt="Fluid-grow image" />
      </BCol>
    </BRow>
  </section>
</template>

<script>
export default {
  name: "Feature",
  props: ["header", "paragraph", "image"],
};
</script>

<style lang="scss" scoped>
.feature {
  margin: 75px 0;
}
</style>
