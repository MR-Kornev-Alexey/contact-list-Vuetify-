<template>
  <div class="v-contacts">
    <v-table :users_data="USERS" />
  </div>
</template>

<script>
import vTable from "./v-table";
import { mapGetters } from "vuex";

export default {
  name: "v-contacts",
  computed: {
    ...mapGetters(["USERS"])
  },
  mounted() {
    this.$store.dispatch("GET_USERS_FROM_API");
  },
  components: {
    vTable
  }
};
</script>

<style scoped></style>
