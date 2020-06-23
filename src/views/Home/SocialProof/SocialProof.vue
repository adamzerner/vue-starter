<template>
  <section>
    <h3>Used widely</h3>
    <p>We bring value to tons of companies.</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <section class="icons">
      <BIcon icon="bucket" font-scale="3"></BIcon>
      <BIcon icon="bag-dash" font-scale="3"></BIcon>
      <BIcon icon="book" font-scale="3"></BIcon>
      <BIcon icon="bootstrap" font-scale="3"></BIcon>
      <BIcon icon="box" font-scale="3"></BIcon>
    </section>
  </section>
</template>

<script>
export default {
  name: "SocialProof",
};
</script>

<style lang="scss" scoped>
.icons {
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
