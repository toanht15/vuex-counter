import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    counter: 20
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  mutations: {
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    }
  },
  actions: {
    decreaseCounter( {commit}) {
      axios('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1').then(response =>{
        console.log(response.data[0])
        commit('decreaseCounter', response.data[0])
      })
    },
    increaseCounter( {commit}) {
      axios('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1').then(response =>{
        console.log(response.data[0])
        commit('increaseCounter', response.data[0])
      })
    }
  },
  modules: {
  }
})
