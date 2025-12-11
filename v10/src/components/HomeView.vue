<script setup>
import { useCounterStore } from '@/stores/counter';
import Child from './Child.vue';
import { ref } from 'vue';

  const counter = useCounterStore()
  const parentData = ref('초기값')
//   const getData = (childData) => {
//     parentData.value = childData.value
//   }
</script>

<template>
    <div>
        <h3>Home View</h3>
        <div>
            <p>방문자 집계 : {{ counter.count }}</p>
            <p>홀짝 판별: {{ counter.oddOrEven }}</p>
            <button @click="counter.increment">방문자 1 증가</button>
            <button @click="counter.decrement">방문자 1 감소</button>
        </div>
        <hr>
        <div>
            부모에서 본 데이터: {{ parentData }}
        </div>
    </div>
  <br />
  <div>
    <!-- <Child :child-data="parentData" @on-child-input="getData" /> -->
    <Child v-model="parentData" />
  </div>
</template>

<style scoped></style>
