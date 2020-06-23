<template>
  <section>
    <br />
    <b-jumbotron
      header="Online courses to grow your company."
      lead="We're a different, more effective way to grow your company. Our marketing
      courses have three components: a concise curriculum, step-by-step
      implementation instructions, and access to our growth experts. It's like
      having a VP of Growth in your pocket."
    >
      <b-img
        src="https://picsum.photos/300/100/?image=41"
        fluid-grow
        alt="Responsive image"
      ></b-img>
    </b-jumbotron>
  </section>
</template>

<script>
export default {
  name: "hero",
};
</script>

<style lang="scss" scoped>
.display-3,
.lead {
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
