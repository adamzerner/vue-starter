<template>
  <section class="container">
    <BNavbar toggleable="sm" variant="light">
      <BNavbarBrand to="/">Home</BNavbarBrand>
      <BCollapse id="nav-collapse" is-nav>
        <BNavbar-nav></BNavbar-nav>
        <BNavbar-nav class="ml-auto">
          <BNavItem to="sign-in">Sign In</BNavItem>
          <BNavItem to="register">Register</BNavItem>
        </BNavbar-nav>
      </BCollapse>
    </BNavbar>
  </section>
</template>

<script>
export default {
  name: "Navbar",
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
