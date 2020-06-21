<template>
  <section class="container">
    <b-navbar toggleable="sm" variant="light">
      <b-navbar-brand to="home">Home</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="about">About</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="sign-in">Sign In</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style lang="scss" scoped></style>
