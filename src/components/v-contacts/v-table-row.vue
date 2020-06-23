<template>
  <div class="v-table-row mb-2 align-content-center">
    <v-avatar size="36" class="user_avatar red lighten-2 avatar mt-2">
      <img :src="row_data.avatar" alt="" />
    </v-avatar>
    <div class="user_change icons text-center justify-center mt-2">
      <v-icon class="mr-2 icon-avatar align-content-center">
        mdi-account-edit
      </v-icon>
      |
      <v-icon class="ml-2 icon-avatar"  @click="deleteContact(row_data.id)"> mdi-account-remove </v-icon>
    </div>

    <div class="user_name mt-2">
      {{ row_data.name }}
    </div>
    <div class="user_phone mt-2">
      {{ row_data.phone }}
    </div>
    <div class="user_email mt-2">
      {{ row_data.email }}
    </div>
    <div class="user_department mt-2">
      {{ row_data.department }}
    </div>
  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods:{
    deleteContact(value){
      this.$store.dispatch("API_DELETE_USER", value)
              .then(function(response) {
                this.$router.push("/contacts");
                return  response
              })
              .catch(err => err);
         }
  }
};
</script>

<style lang="scss">
.icon-avatar {
  font-size: 30px !important;
  cursor: pointer;
}
.v-table-row {
  display: flex;
  justify-content: space-between;
}
</style>
