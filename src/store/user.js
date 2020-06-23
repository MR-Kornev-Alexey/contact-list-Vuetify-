import firebase from "firebase";

export default {
  state: {
    user: {
      isAuthenticated: false,
      uid: null
    }
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.isAuthenticated = true;
      state.user.uid = payload;
    }
   },
  actions: {
    SIGN_UP({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("SET_USER", user.uid);
          commit("SET_PROCESSING", false);
        })
        .catch(function(error) {
          commit("SET_PROCESSING", false);
          commit("SET_ERROR", error.message);
        });
    },
    SIGN_IN({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("SET_USER", user.uid);
          commit("SET_PROCESSING", false);
        })
        .catch(function(error) {
          commit("SET_PROCESSING", false);
          commit("SET_ERROR", error.message);
        });
    }
  },
  getters: {
    IS_USER_AUTHENTICATED: state => state.user.isAuthenticated
  }
};
