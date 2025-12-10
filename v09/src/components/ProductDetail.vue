<template>
    <div>
        <h3>Product Detail Contents</h3>
        <p>현재 보여줄 상품 id는 {{ $route.params.id }}</p>
        <p>추가된 검색 옵션은 {{ query }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

    const route = useRoute()
    // console.log(route.query)
    const query = route.query.lang
</script>