<script setup lang="ts">
import GrandChild from './GrandChild.vue';

</script>

<template>
    <div>
        <h2>Child View</h2>
        <p>부모의 숫자: </p>
        <GrandChild />
    </div>
</template>

<style scoped>
    div {
        border: 3px solid blueviolet;
        padding: 20px;
        margin-top: 20px;
    }
</style>