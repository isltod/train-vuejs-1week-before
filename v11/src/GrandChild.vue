<script setup>
import { inject, ref } from 'vue';
import { useCounterStore } from './stores/counter';
    // provide/inject 부분
    const num = inject("num")
    // pinia 부분
    const counter = useCounterStore()
</script>
<template>
    <div>
        <h3>Grand Child View</h3>
        <p>provide/inject 조부모의 숫자: {{ num }}</p>
        <p>pinia 조부모의 숫자: {{ counter.count }} </p>
    </div>
</template>

<style scoped>
    div {
        border: 3px solid greenyellow;
        padding: 20px;
        margin-top: 20px;
    }
</style>