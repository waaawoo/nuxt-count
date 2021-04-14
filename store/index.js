import Vuex from vuex

const createStore = () => {
  return new Vuex.Store({
    state(){
      return{
        count: 0
      }
    },
    mutations: {
      upCount(state){
        state.count += 1
      }
    },
    actions: {

    }
  })
}
