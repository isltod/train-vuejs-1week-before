<script setup>
import { provide, ref } from 'vue';
import Child from './Child.vue';
import { useCounterStore } from './stores/counter';
  // provide/inject 부분
  const num = ref(0)
  provide("num", num)
  const increment = () => {num.value++}
  // pinia 부분
  const counter = useCounterStore()
</script>

<template>
  <div>
    <h1>App View</h1>
    <table>
      <tbody>
        <tr>
          <td>
            <button @click="increment">provide/inject 숫자 증가</button>
            {{ num }}
          </td>
          <td>
            <button @click="counter.increment">pinia 숫자 증가</button>
            {{ counter.count }}
          </td>
        </tr>
      </tbody>
    </table>
    <Child />
  </div>
</template>

<style scoped>
  div {
    border: 3px solid black;
    padding: 20px;
  }
</style>
