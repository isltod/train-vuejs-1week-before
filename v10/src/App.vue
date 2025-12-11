<script setup></script>

<template>
  <h3>App View</h3>
  <p>
    a 태그를 사용하면 refresh 되서 pinia 값이 초기화 된다 | <a href="/">Home</a> | <a href="/about">About</a>
  </p>
  <p>
    라우터 링크를 사용하면 refresh 되지 않아 유지된다. |
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
  </p>
  <RouterView />
</template>

<style scoped></style>
