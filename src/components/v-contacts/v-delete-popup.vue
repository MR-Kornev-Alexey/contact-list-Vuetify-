<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent ref="close" max-width="800px">
            <template v-slot:activator="{ on }">
                <v-icon class="ml-2 icon-avatar" v-on="on"> mdi-account-remove</v-icon>
            </template>
            <v-card>
                <v-card-title class="d-flex text-center justify-center ">
                    <span class="headline">Внимание! Вы удаляете контакт!</span>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#00007a" text @click="dialog = false">Закрыть</v-btn>
                    <v-btn
                            color="deep-orange darken-4"
                            text
                            @click="
              deleteContact(row_data_del);
              closeWindow();
            "
                            outlined
                            type="submit"
                    >Удалить
                    </v-btn>
                </v-card-actions>
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
            row_data_del: {
                type: Number,
                default: () => {
                    return 0;
                }
            }
        },
        methods: {
            closeWindow() {
                return (this.dialog = false);
            },
            deleteContact(value) {
                alert(value);
                this.$store
                    .dispatch("API_DELETE_USER", value)
                    .then(function (response) {
                        this.$router.push("/contacts");
                        return response;
                    })
                    .catch(err => err);
            }
        },
        computed: {}
    };
</script>
<style lang="scss" scoped>
    .input-form {
        width: 400px;
    }
</style>
