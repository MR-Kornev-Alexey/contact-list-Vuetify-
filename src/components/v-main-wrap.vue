<template>
    <v-container>
        <h1 class="mt-4 mb-4">Панель управления</h1>
        <p>
            Если вы в первый раз, то пожалуйста
            <router-link class="router-input" to="signup">
                зарегистрируйтесь.
            </router-link>
        </p>
        <p>
            Или войдите в
            <router-link class="router-input" to="signin">
                сервис.
            </router-link>
        </p>
    </v-container>
</template>

<script>
    export default {
        name: "v-main-wrap",

        data: () => ({})
    };
</script>

<style lang="scss" scoped>
    .router-input {
        margin-top: 12px;
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
</style>
