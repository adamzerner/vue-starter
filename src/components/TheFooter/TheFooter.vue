<template>
  <footer>
    <ul>
      <li><RouterLink to="help">Help</RouterLink></li>
      <li><RouterLink to="about">About</RouterLink></li>
      <li><RouterLink to="contact">Contact</RouterLink></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: 30px;
  border-top: 1px solid #d3d3d3;
  padding: 30px 0;
}

ul {
  list-style-type: none;
  margin-bottom: 0;
  padding-left: 0;
  text-align: center;
}

li {
  display: inline-block;
  padding: 0 20px;
}
</style>
