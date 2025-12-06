<template>
    <div>
        <ChildComponent @send-message="sendMessage" ref="child_component" />
    </div>
    <button @click="changeChildData">Change Child Data</button><br />
    <button @click="checkChild">자식 컴포넌트 데이터 조회</button>
    <ChildComponent ref="child_component1" />
</template>
<script>
    import ChildComponent from './ChildComponent.vue';
export default {
    components: {ChildComponent},
    computed: {
        msg1() {
            return this.$refs.child_component1.msg2;
        }
    },
    data() {
        return {
            sampleData: ''
        };
    },
    setup() {},
    created() {},
    mounted() {
        this.$refs.child_component.$refs.btn.click();
        this.$refs.child_component.callFromParent();
    },
    unmounted() {},
    methods: {
        changeChildData() {
            this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
        },
        sendMessage(data) {
            console.log(data);
        },
        checkChild() {
            alert(this.msg1);
        }
    }
}
</script>
<style scoped>
</style>
