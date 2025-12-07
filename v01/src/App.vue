<script>
  export default {
    data() {
      return {
        title: "이것은 텍스트 인터폴레이션",
        directive1: "디렉티브는 항상 태그 안에 속성으로...",
        directive2: "그리고 태그 안에는 공백 외 아무것도 넣지 않는다...",
        htmlSrc: "<span style='font-weight: bold; color: red;'>이것은 HTML 소스</span",
        varText: "이것은 출력되지 않는다",
        score: 85,
        words: ["이것은", "일반적인", "for문이고,"],
        words_index: ["이것은", "인덱스", "for문이다."]
      }
    }
  }
</script>

<template>
  <div>
    <h3>이것은 그대로 텍스트</h3>
    <h3>{{ title }}</h3>
    <p>{{ '자바스크립트로 뽑은 행운의 숫자: ' + Math.ceil(Math.random() * 45) }}</p>
    <p v-text="directive1"></p>
    <p v-text="directive2"> </p>
    <p v-html="htmlSrc"></p>
    <p v-pre>{{ varText }}</p>
    <p v-show="score > 90">v-show는 안 보여도 display none으로 있지만,</p>
    <p v-if="score > 90">v-if는 아예 존재하지 않는다.</p>
    <p v-else-if="score > 80">else-if는 반드시 if 밑에 있어야 하고,</p>
    <p v-else>else는 if와 else-if 아래에 있어야 한다.</p>
    <ul>
      <li v-for="word in words">{{ word }}</li>
    </ul>
    <ul>
      <li v-for="(word, index) in words_index">{{ index + 1 }} - {{ word }}</li>
    </ul>
  </div>
</template>

<style></style>
