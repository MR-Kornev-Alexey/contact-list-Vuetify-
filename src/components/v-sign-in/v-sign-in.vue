<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5">
        <v-card class="elevation-12">
          <v-toolbar color="#222c56" dark flat>
            <v-toolbar-title>Вход</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-alert
              :value="error"
              border="right"
              color="blue-grey"
              type="warning"
              dark
            >
              {{ error }}
            </v-alert>
            <v-form>
              <v-text-field
                color="#222c56"
                label="Е-мейл"
                name="login"
                prepend-icon="mdi-account"
                type="email"
                required
                v-model="email"
              ></v-text-field>

              <v-text-field
                color="#222c56"
                id="password"
                label="Пароль"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                required
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="#222c56"
              dark
              @click.prevent="signIn"
              :disabled="processing"
              >Войти
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "v-sign-up",
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    error() {
      return this.$store.getters.GET_ERROR;
    },
    processing() {
      return this.$store.getters.GET_PROCESSING;
    },
    isUserAuthenticated() {
      return this.$store.getters.IS_USER_AUTHENTICATED;
    }
  },
  watch: {
    isUserAuthenticated(val) {
      if (val === true) {
        this.$router.push("/contacts");
      }
    }
  },
  methods: {
    signIn() {
      this.$store.dispatch("SIGN_IN", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped></style>
