<template>
  <div class="v-table-row mb-2 align-content-center">
    <v-avatar size="36" class="user_avatar red lighten-2 avatar mt-2">
      <img :src="row_data.avatar" alt="" />
    </v-avatar>
    <div class="user_change icons text-center justify-center mt-2">
      <vEditPopup :edit_data="row_data"/>
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
    <div class="user_change ">
      <vDeletePopup :row_data_del="row_data.id"/>
    </div>

  </div>
</template>

<script>
  import vDeletePopup from './v-delete-popup'
  import vEditPopup from './v-edit-popup'
export default {
  name: "v-table-row",
  components: {
    vDeletePopup,
    vEditPopup
  },
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

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
