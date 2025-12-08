<template>
    <div>
        <h3>손자 컴포넌트</h3>
        <p>할아버지 현재 숫자 {{ granFaNum }}</p>
        <p>하지만 동적 바인딩은 안된다!</p>
    </div>
</template>

<script>
    export default {
        inject: ["granFaNum"]
    }
</script>