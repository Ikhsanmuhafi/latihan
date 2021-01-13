import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        nama: '',
        alamat:'',
        program:'',
        diteriama:false
      },
      {
        nama: '',
        alamat:'',
        program:'',
        diteriama:false
      },
      {
        nama: '',
        alamat:'',
        program:'',
        diteriama:false
      },
      {
        nama: '',
        alamat:'',
        program:'',
        diteriama:false
      },
      {
        nama: '',
        alamat:'',
        program:'',
        diteriama:true
      }
    ],
    admin: {
      username: 'ikhsan',
      password: '2020',
      authenticated: false
    }
  },
  mutations: {
    addUsers(state, payload) {
      state.users.push(payload)
    },
    hapus(state, payload) {
      for(let i = 0; i < state.users.length; i++){
        if (state.users[i].nama === payload){
          state.users.splice(i, 1)
          break;
        }
      }
    },
    loginAdmin(state, payload){
      state.admin = payload
    },
    setAuthentication(state, status){
      state.authenticated = status
    }
  },
  actions: {
    actionUsers(store, payload){
      store.commit('addUsers', payload)
    },
    login(store, payload) {
      store.commit('loginAdmin', payload)
    },
    hapususer(store, payload){
      store.commit('hapus', payload)
    }
  },
  // modules: {
  // }
})
