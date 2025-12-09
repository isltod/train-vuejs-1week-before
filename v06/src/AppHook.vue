<script>
import { computed, ref } from 'vue';

  export default {
    setup() {
      const myNum = ref(0);
      const increase1 = () => myNum.value++;
      const oddEven = computed(
        () => (myNum % 2 == 0) ? "짝수" : "홀수"
      );

      return {myNum, increase1, oddEven};
    }
  }
</script>

<template>
  <div>
    <h3>홀짝 판별 Options API</h3>
    <p>{{ myNum }}</p>
    <p>홀짝 판별: {{ oddEven }}</p>
    <button @click="increase1">1씩 증가</button>
  </div>
</template>

<style></style>
