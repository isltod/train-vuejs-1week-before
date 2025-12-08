<script>
  import LocalChild from './components/LocalChild.vue';
  export default {
    data() {
      return {
        num: 4,
        name: "홍길동",
        age: 12,
      }
    },
    components: {LocalChild},
    beforeCreate()  {console.log("Parent beforeCreate")},
    created()       {console.log("Parent created")},
    beforeMount()   {console.log("Parent beforeMount")},
    mounted()       {console.log("Parent mounted")},
    beforeUpdate()  {console.log("Parent beforeUpdate")},
    updated()       {console.log("Parent updated")},
    beforeUnmount() {console.log("Parent beforeUnmount")},
    unmounted()     {console.log("Parent unmounted")},
    methods: {
      updateProps() {
        this.age++;
      },
      updateFromChild() {
        this.age++;
      }
    },
    provide() {
      return { granFaNum: this.num }
    }
  }
</script>

<template>
  <div>
    <h2>App Vue</h2>
    <p>부모 컴포넌트입니다...</p>
    <div>
      <label for="plusBtn">현재 숫자: {{ num }} 입니다.</label>
      <button id="plusBtn" @click="num++">+</button>
    </div>
    <br />
    <div class="components">
      <button @click="updateProps">나이++</button>
      <LocalChild :name="name" :age="age" @child-call="updateFromChild" />
    </div>
    <div class="components">
      <GlobalComponent v-if="num % 2 == 0" />
    </div>
  </div>
</template>

<style>
  .components {
    border: 1px solid gray;
    padding: 2%;
  }
</style>
