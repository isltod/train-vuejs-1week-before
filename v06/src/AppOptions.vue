<script>
  export default {
    data() {
      return {
        myNum: 0
      }
    },
    computed: {
      oddEven() {
        return (this.myNum % 2 == 0) ? "짝수" : "홀수"
      }
    },
    methods: {
      increase1() {
        this.myNum++;
      }
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
