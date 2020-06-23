<template>
  <div class="v-table-row">
    <div class="row icons text-center justify-center">
      <v-icon class="mr-2"> mdi-account-edit </v-icon> |
      <v-icon class="ml-2"> mdi-account-remove </v-icon>
    </div>
    <div class="row row__name">
      {{ row_data.name }}
    </div>
    <div class="row row__family">
      {{ row_data.family }}
    </div>
    <div class="row row__company">
      {{ row_data.company }}
    </div>
    <div class="row row__date">
      {{ row_data.time_create }}
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
  }
};
</script>

<style lang="scss">
.icons {
  margin-right: 24px;
}
.row {
  flex-basis: 20%;
  text-align: center;
}
.v-table-row {
  display: flex;
  justify-content: space-around;
}
</style>
