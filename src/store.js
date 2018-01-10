import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    }
  },
  actions: {
    signup ({commit}, authData) {
      axios.post('/signupNewUser?key=AIzaSyAIi3psL3fGwBn-DzNFeUPiJY2Q19RMeCU', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch(error => console.log(error))
    },
    login ({commit}, authData) {
      axios.post('/verifyPassword?key=AIzaSyAIi3psL3fGwBn-DzNFeUPiJY2Q19RMeCU', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch(error => console.log(error))
    }
  },
    getters: {

    }
})