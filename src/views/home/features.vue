<template>
  <section>
    <feature
      header="Cooks and Sears"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      image="https://picsum.photos/300/150/?image=41"
    />
    <feature
      header="No Prep or Cleanup"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      image="https://picsum.photos/300/150/?image=47"
    />
    <feature
      header="Cooks More than Just Meat"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      image="https://picsum.photos/300/150/?image=22"
    />
    <feature
      header="Learn As You Go"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      image="https://picsum.photos/300/150/?image=73"
    />
  </section>
</template>

<script>
import feature from "@/views/home/feature";

export default {
  name: "features",
  components: {
    feature,
  },
};
</script>

<style lang="scss" scoped>
.feature:last-of-type {
  margin-bottom: 60px;
}
</style>
