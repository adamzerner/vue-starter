<template>
  <section>
    <Feature
      header="Cooks and Sears"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      image="https://picsum.photos/300/150/?image=41"
    />
    <Feature
      header="No Prep or Cleanup"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      image="https://picsum.photos/300/150/?image=47"
    />
    <Feature
      header="Cooks More than Just Meat"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      image="https://picsum.photos/300/150/?image=22"
    />
    <Feature
      header="Learn As You Go"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      image="https://picsum.photos/300/150/?image=73"
    />
  </section>
</template>

<script>
import Feature from "@/views/Home/Features/Feature/Feature.vue";

export default {
  name: "Features",
  components: {
    Feature,
  },
};
</script>

<style lang="scss" scoped>
.feature:last-of-type {
  margin-bottom: 60px;
}
</style>
