<template>
  <section class="container">
    <BNavbar toggleable="sm" variant="light">
      <BNavbarBrand to="/">Home</BNavbarBrand>
      <BCollapse id="nav-collapse" is-nav>
        <BNavbar-nav></BNavbar-nav>
        <BNavbar-nav class="ml-auto">
          <fragment v-if="signedIn">
            <BNavItemDropdown text="Account" right>
              <BDropdownItem to="account">Account</BDropdownItem>
              <BDropdownItem href="#" v-on:click.prevent="signOut()">
                Sign out
              </BDropdownItem>
            </BNavItemDropdown>
          </fragment>
          <fragment v-else>
            <BNavItem to="sign-in">Sign In</BNavItem>
            <BNavItem to="register">Register</BNavItem>
          </fragment>
        </BNavbar-nav>
      </BCollapse>
    </BNavbar>
  </section>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    signedIn() {
      return this.$store.getters["user/signedIn"];
    },
  },
  methods: {
    async signOut() {
      try {
        await this.$http.delete("/auth/sign-out");
        this.$store.dispatch("user/clearUser");
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
  },
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
