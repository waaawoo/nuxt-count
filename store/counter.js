// counter用のstoreの作成

// stateの作成
export const state = () => ({
  counter: 0
})

// カウンター用のミューテート作成
export const mutations = {
  countUp(state){
    state.counter++
  },
  reset(state){
    state.counter = 0
  }
}
