<template>
    <div>
        <h3>지역 컴포넌트</h3>
        <p>지역 컴포넌트 입니다...</p>
        <p>이름: {{ name }}</p>
        <p>나이: {{ age }}</p>
        <button @click="updateParentProps">자식에서 부모로 props 업데이트는 안된다!</button>
        <button @click="$emit('childCall')">$emit을 사용해야 한다!</button>
        <div class="components">
            <GrandSon />
        </div>
    </div>
</template>

<script>
    import GrandSon from './GrandSon.vue';
    export default {
        props: ["name", "age"],
        methods: {
            updateParentProps() {
                this.age++;
            }
        },
        components: {GrandSon}
    }
</script>