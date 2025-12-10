<template>
    <h3>Product View Contents</h3>
    <button type="button" @click="goAbout">About 페이지로 이동</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

    const router = useRouter()
    const goAbout = () => router.push("/about")
</script>