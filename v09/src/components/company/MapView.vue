<template>
    <div>
        <h4>오시는 길</h4>
    </div>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router';

    onBeforeRouteLeave((to, from, next) => {
        // 여기서 from은 자기 자신인데, 이걸 뭐에 쓴담?
        console.log(from.fullPath)
        if (to.fullPath != "/") {
            next()
        }
    })
</script>