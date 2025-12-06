<template>
    <div>
        <h3>{{ msg }}</h3>
        <button @click="childFunc" ref="btn">click</button>
        <button @click="childFunc1" ref="btn1">자식 컴포넌트 데이터 변경</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: '',
            msg1: '자식 컴포넌트에서 보내는 메시지',
            msg2: '원래 메시지'
        };
    },
    mounted() {
        this.$emit('send-message', this.msg1)
    },
    methods: {
        childFunc() {
            console.log('부모 컴포넌트에서 발생시킨 이벤트');
        },
        callFromParent() {
            console.log('부모 컴포넌트에서 호출한 함수')
        },
        childFunc1() {
            this.msg2 = '변경된 메시지';
        }
    }
}
</script>
