<template>
  <footer>
    <ul>
      <li><b-link to="help">Help</b-link></li>
      <li><b-link to="about">About</b-link></li>
      <li><b-link to="contact">Contact</b-link></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "footer",
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
