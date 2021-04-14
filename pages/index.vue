<template>
<div>
  <!-- <Count/>
  <Count/>
  <Count/> -->
  <Counter/>
  <hr>
  <Counter/>
  <hr>
  <Counter/>
  <hr>
</div>

</template>

<script>
import Count from "./countComponent.vue"
// コンポーネントの呼び出し
import Counter from "~/components/Counter.vue"
export default {
  components: {
    Count
  }
}
</script>

<style>

</style>
