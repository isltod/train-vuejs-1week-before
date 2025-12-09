<script setup>
import { ref } from 'vue';
import ButtonCounter from './components/ButtonCounter.vue';
  const title = "부모가 준 제목";
  const content = "부모가 준 내용";

  const childMessage = ref("");
  const getChildMessage = (childData) => {
    childMessage.value = childData;
  }
</script>

<template>
  <div>
    <h3>여기는 부모 컴포넌트</h3>
    <p>{{ childMessage }}</p>
    <ButtonCounter class="component" :title="title" :mainContent="content" @get-child-message="getChildMessage"/>
  </div>
</template>

<style scoped>
  .component {
    border: 1px solid gray;
    padding: 2%;
  }
</style>
