<template>
  <div>
    <h1> {{ title }} </h1>
    <!-- counter.jsのcounerを参照する -->
    counter: {{ $store.state.counter.counter }}
    <!-- counter.jsのメソッドを呼び出す -->
    <button @click="$store.commit('counter/countUp')">+1</button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      title: "Counter App"
    };
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
