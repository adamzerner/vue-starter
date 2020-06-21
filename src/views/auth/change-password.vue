<template>
  <section>
    <page-header>Change password</page-header>
    <b-form>
      <b-form-group label="Old password">
        <b-form-input v-model="oldPassword" type="text"></b-form-input>
      </b-form-group>
      <b-form-group label="New password">
        <b-form-input v-model="newPassword" type="text"></b-form-input>
        <template v-slot:description>
          Must be at least six characters
        </template>
      </b-form-group>
      <b-button type="submit" variant="primary" block>
        Change password
      </b-button>
    </b-form>
  </section>
</template>

<script>
import PageHeader from "@/components/page-header/page-header.vue";

export default {
  name: "change-password",
  components: {
    "page-header": PageHeader,
  },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
