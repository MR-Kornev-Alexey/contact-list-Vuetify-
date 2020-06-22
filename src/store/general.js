export default {
  state: {
    processing: false,
    error: null
  },
  mutations: {
    SET_PROCESSING(state, payload) {
      state.processing = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
    CLEAN_ERROR(state) {
      state.error = null;
    }
  },
  getters: {
    GET_PROCESSING: state => state.processing,
    GET_ERROR: state => state.error
  }
};
