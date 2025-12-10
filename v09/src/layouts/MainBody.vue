<template>
    <div>
        <h3>Main Body Layout</h3>
        <p>아래는 Router View 페이지들</p>
        <p>Route Name: {{ $route.name }}</p>
        <div class="rtv">
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
    .rtv {
        border: 1px solid gray;
        padding: 2%;
    }
</style>