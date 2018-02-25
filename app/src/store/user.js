import md5 from 'md5';

const SET_USER = 'setUser';

const state = {
  user: null
};

const mutations = {
  [SET_USER](state, payload) {
    state.user = {
      displayName: payload.displayName,
      email: payload.email,
      emailVerified: payload.emailVerified,
      isAnonymous: payload.isAnonymous,
      metadata: payload.metadata,
      phoneNumber: payload.phoneNumber,
      photoURL: payload.photoURL,
      uid: payload.uid
    };
  }
};

const getters = {
  username: (state) => {
    return state.user && (state.user.displayName || state.user.email);
  },
  photoUrl: (state) => {
    return state.user && (state.user.photoURL || 'https://www.gravatar.com/avatar/' + md5(state.user.email.trim().toLowerCase()));
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
};
