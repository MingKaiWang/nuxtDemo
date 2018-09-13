import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    testData: 0
  },
  mutations: {
    setTestData (state, data) {
      state.testData = data
    }
  }
})

export default store