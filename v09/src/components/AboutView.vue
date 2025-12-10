<template>
    <h3>About View Contents</h3>
    <p>템플릿에서 바로 사용하는 경로 {{ $route.fullPath }}</p>
    <p>{{ path }}</p>
    <button type="button" @click="$router.push('/product')">Product 페이지로 이동</button>
    <div>
        <RouterLink :to="{name: 'Company intro'}">회사소개</RouterLink> |
        <RouterLink :to="{name: 'Company history'}">연혁</RouterLink> |
        <RouterLink :to="{name: 'Map'}">찾아오시는 길</RouterLink>
    </div>
    <div class="rtv">
        <RouterView name="header" />
        <RouterView name="body" />
        <RouterView name="footer" />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

    const route = useRoute()
    const path = "스크립트에서 route로 만든 경로 " + route.path
</script>

<style scoped>
    .rtv {
        border: 1px solid crimson;
        padding: 2%;
    }
</style>