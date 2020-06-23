<template>
  <section>
    <br />
    <BJumbotron
      header="Online courses to grow your company."
      lead="We're a different, more effective way to grow your company. Our marketing
      courses have three components: a concise curriculum, step-by-step
      implementation instructions, and access to our growth experts. It's like
      having a VP of Growth in your pocket."
    >
      <BImg
        src="https://picsum.photos/300/100/?image=41"
        fluid-grow
        alt="Responsive image"
      ></BImg>
    </BJumbotron>
  </section>
</template>

<script>
export default {
  name: "Hero",
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
