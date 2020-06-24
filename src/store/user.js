import firebase from "firebase";
import axios from "axios";

export default {
    state: {
        users: [],
        user: {
            isAuthenticated: false,
            uid: null
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.isAuthenticated = true;
            state.user.uid = payload;
        },
        SET_USERS_TO_STATE(state, payload) {
            state.users = payload;
        }
    },
    actions: {
        API_POST_USER_EDIT({commit}, value) {
            const url = "http://localhost:3000/users/" + value.id + "/";
            return axios
                .put(url, value)
                .then(response => {
                    commit("SET_USERS_TO_STATE", response.data);
                    return response;
                })
                .catch(error => {
                    console.log(error);
                    return error;
                });
        },

        API_DELETE_USER({commit}, value) {
            const url = "http://localhost:3000/users/" + value + "/";
            return axios
                .delete(url)
                .then(response => {
                    commit("SET_USERS_TO_STATE", response.data);
                    return response;
                })
                .catch(error => {
                    console.log(error);
                    return error;
                });
        },
        API_POST_USER_INPUT({commit}, formData) {
            return axios
                .post("http://localhost:3000/users", formData)
                .then(response => {
                    commit("SET_USERS_TO_STATE", response.data);
                    return response;
                })
                .catch(error => {
                    console.log(error);
                    return error;
                });
        },

        API_SEARCH({commit}, value) {
            const url = "http://localhost:3000/users?q=" + value;
            return axios
                .get(url)
                .then(response => {
                    commit("SET_USERS_TO_STATE", response.data);
                    return response;
                })
                .catch(error => {
                    console.log(error);
                    return error;
                });
        },

        GET_USERS_FROM_API({commit}) {
            return axios("http://localhost:3000/users", {
                method: "GET"
            })
                .then(response => {
                    commit("SET_USERS_TO_STATE", response.data);
                    return response;
                })
                .catch(error => {
                    console.log(error);
                    return error;
                });
        },
        SIGN_UP({commit}, payload) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    commit("SET_USER", user.uid);
                    commit("SET_PROCESSING", false);
                })
                .catch(function (error) {
                    commit("SET_PROCESSING", false);
                    commit("SET_ERROR", error.message);
                });
        },
        SIGN_IN({commit}, payload) {
            firebase
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    commit("SET_USER", user.uid);
                    commit("SET_PROCESSING", false);
                })
                .catch(function (error) {
                    commit("SET_PROCESSING", false);
                    commit("SET_ERROR", error.message);
                });
        }
    },
    getters: {
        IS_USER_AUTHENTICATED: state => state.user.isAuthenticated,
        USERS: state => state.users
    }
};
