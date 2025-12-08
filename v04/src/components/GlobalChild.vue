<template>
    <div>
        <h3>전역 컴포넌트</h3>
        <p>전역 컴포넌트 입니다...</p>
        <div>
            <GrandSon />
        </div>
    </div>
</template>

<script>
    import GrandSon from './GrandSon.vue';
    export default {
        beforeCreate()  {console.log("Global Child beforeCreate")},
        created()       {console.log("Global Child created")},
        beforeMount()   {console.log("Global Child beforeMount")},
        mounted()       {console.log("Global Child mounted")},
        beforeUpdate()  {console.log("Global Child beforeUpdate")},
        updated()       {console.log("Global Child updated")},
        beforeUnmount() {console.log("Global Child beforeUnmount")},
        unmounted()     {console.log("Global Child unmounted")},
        components: {GrandSon}
    }
</script>
<!-- 여기에 scoped 해야 여기만 스타일이 한정되고 부모로 번지지 않는다... -->
<style scoped>
    h3 { color: red; }
    p {color: blueviolet;}
</style>