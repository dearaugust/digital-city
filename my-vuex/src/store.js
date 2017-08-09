import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  count: 0
}
let mutations = {
  increment (state) {
    state.count++
  }
}
const store = new Vuex.Store({
  state,
  mutations
})

export default store
