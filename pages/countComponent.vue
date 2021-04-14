<template>
  <div class="container">
    <p>state</p>
    {{ $store.state.count }}
    <button @click="$store.dispatch('upCountAction')">countUp</button>

    <p>this</p>
    {{ count }}
    <button @click="countup">数値アップ</button>
    <hr>
  </div>
</template>

<script>
export default {

  data() {
    return {
      count: 0
    };
  },
  mounted() {

  },
  methods: {
    countup(){
      this.count += 1
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
