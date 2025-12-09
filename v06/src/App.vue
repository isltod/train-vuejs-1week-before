<script setup>
  import { computed, reactive, ref, watch, watchEffect } from 'vue';
  // ref 변수 처리
  const myNum = ref(0);
  const increase1 = () => myNum.value++;
  const oddEven = computed(
    () => (myNum % 2 == 0) ? "짝수" : "홀수"
  );
  // reactive 변수 처리
  const person = reactive({name: "홍길동", age: 30});
  // 이렇게 함수로도 만들 수 있지만 무명 함수가 권장된다네...
  function changeName() {
    person.name = (person.name == "홍길동") ? "고길동" : "홍길동";
  }
  // ref로 HTML 요소 참조 - 처음에 null 초기화 중요
  const pageTitle = ref(null);
  const getTitle = () => {alert(pageTitle.value.innerText)};
  // ref로 스타일 클래스 적용
  const redTitle = ref('');
  const changeStyle = () => redTitle.value = "red-title";
  // ref형 watch
  const refChange = {oldNum: null, newNum: null};
  watch(myNum, (newValue, oldValue) => {
    refChange.newNum = newValue;
    refChange.oldNum = oldValue;
  })
  // reactive형 watch - 그런데 deep 상관없이 무조건 되는데?
  const newName = ref("");
  watch(person, (newObject, oldObject) => {
    newName.value.innerText = `이름이 ${newObject.name}으로 바꼈습니다.`
    // 이 둘은 같은 개체다...
    console.log(newObject, oldObject)
  });
  // 둘다 watch는 watchEffect로...
  const allWatch = ref("");
  watchEffect(
    () => {
      // watchEffect는 init 단계에서 먼저 실행되므로, 개체에 아무것도 없을 때는 걸러야 한다...
      if (allWatch.value) {
        allWatch.value.innerText = `현재 숫자는 ${myNum.value}이고 이름은 ${person.name}입니다...`
      }
    }
  );
</script>

<template>
  <div>
    <h2 ref="pageTitle" :class="redTitle">컴포지션 API</h2>
    <button @click="getTitle">ref로 HTML 태그 참조하기</button>
    <button @click="changeStyle">ref로 스타일 클래스 바꾸기</button>
    <hr />
    <h3>ref 변수</h3>
    <p>{{ myNum }}</p>
    <p>홀짝 판별: {{ oddEven }}</p>
    <p>값 변화: 이전 값 {{ refChange.oldNum }}, 현재 값 {{ refChange.newNum }}</p>
    <button @click="increase1">1씩 증가</button>
    <hr />
    <h3>reactive 변수</h3>
    <p>{{ person.name }} / {{ person.age }}</p>
    <button @click="changeName">이름 바꾸기</button>
    <p ref="newName"></p>
    <hr />
    <p ref="allWatch"></p>
  </div>
</template>

<style scoped>
  .red-title {color: red;}
</style>
