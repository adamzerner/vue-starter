<template>
  <section class="container">
    <b-navbar toggleable="sm" variant="light">
      <b-navbar-brand to="/">Home</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav></b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="sign-in">Sign In</b-nav-item>
          <b-nav-item to="register">Register</b-nav-item>
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

<style lang="scss" scoped>
@media (max-width: map-get($grid-breakpoints, "sm")) {
  // always showing nav items on mobile instead of using a hamburger menu
  // this approach is hacky but seems like it doesn't seem like there's a better option
  #nav-collapse {
    display: block !important;
  }
}
</style>
