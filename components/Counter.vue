<template>
  <div>
    <h1> {{ title }} </h1>
    <p>storeの値</p>
    <!-- counter.jsのcounerを参照する -->
    counter: {{ $store.state.counter.counter }}
    <!-- counter.jsのメソッドを呼び出す -->
    <button @click="$store.commit('counter/countUp')">+1</button>
    <button @click="$store.commit('counter/reset')">storeリセット</button>
    <p>コンポーネントの値</p>
    data: {{ count }}
    <button @click="countUp">+1</button>
    <button @click="resetCount">reset</button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      title: "Counter componento",
      count: 0
    };
  },
  mounted() {

  },
  methods: {
    countUp(){
      this.count++
    },
    resetCount(){
      this.count = 0
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
