<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent ref="close" max-width="800px">
      <template v-slot:activator="{ on }">
        <v-icon class="ml-2 icon-avatar" v-on="on" > mdi-account-edit</v-icon>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Редактирование контакта </span>
        </v-card-title>
        <v-form @submit.prevent="inputContact" class="px-6" ref="form">
          <v-text-field
            color="#222c56"
            label="Имя"
            name="name"
            prepend-icon="mdi-account"
            type="text"
            required
            v-model="name"
          ></v-text-field>
          <v-text-field
            color="#222c56"
            label="Телефон"
            name="phone"
            prepend-icon="mdi-phone"
            type="phone"
            required
            v-model="phone"
          ></v-text-field>
          <v-text-field
            color="#222c56"
            label="Е-мейл"
            name="login"
            prepend-icon="mdi-email"
            type="email"
            required
            v-model="email"
          ></v-text-field>
          <v-text-field
            color="#222c56"
            label="Отдел"
            name="company"
            prepend-icon="mdi-city"
            type="text"
            required
            v-model="department"
          ></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#00007a" text @click="dialog = false">Закрыть</v-btn>
            <v-btn color="deep-orange darken-4" text outlined type="submit"
              >Загрузить
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    name: "",
    department: "",
    email: "",
    phone: null,
    dialog: false
  }),
  props: {
    edit_data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    inputContact: function() {
      this.errors = [];
      let rawData = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/quailandquasar/128.jpg",
        department: this.department
      };
      this.$store
        .dispatch("API_POST_USER_INPUT", rawData)
        .then(function(response) {
          this.$refs.close.dialog = false;
          this.$router.push("/contacts");
            return  response
        })
        .catch(err => err);
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.input-form {
  width: 460px;
}
</style>
