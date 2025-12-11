import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const oddOrEven = computed(() => (count.value % 2) == 0 ? "짝수" : "홀수")
  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }

  return { count, oddOrEven, increment, decrement }
})
