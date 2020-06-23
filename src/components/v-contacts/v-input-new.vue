<template>
  <v-container>
    <h1 class="mt-4 mb-4">Ввод нового контакта </h1>
    <v-form class="input-form">
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
              label="Фамилия"
              name="family"
              prepend-icon="mdi-account"
              type="text"
              required
              v-model="family"
      ></v-text-field>
      <v-text-field
              color="#222c56"
              label="Фирма"
              name="company"
              prepend-icon="mdi-city"
              type="text"
              required
              v-model="company"
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
              label="Телефон"
              name="phone"
              prepend-icon="mdi-phone"
              type="phone"
              required
              v-model="phone"
      ></v-text-field>
      <v-btn
              color="#222c56"
              dark
              @click.prevent=""
              :disabled="processing"
      >Внести в лист</v-btn
      >
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "v-input-new",
  data() {
    return {
      name:"",
      family: "",
      company: "",
      email: "",
      phone: null,
    };
  },
};
</script>

<style lang="scss" scoped>
  .input-form {
    width: 460px;
  }
</style>
