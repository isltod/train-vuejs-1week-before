<template>
    <div>
        <h2>New Calculator</h2>
        <div>
            <input type="text" v-model="num1"/>
            <span> + </span>
            <input type="text" v-model="num2"/>
            <span> = </span>
            <span>{{ result }}</span>
        </div>
    </div>
</template>
<script>
import { plusCalculator } from './CalculatorCommon.vue';

    export default {
        name: 'NewCalculator',
        components: {},
        data() {
            return {
                sampleData: ''
            };
        },
        setup() {
            let {num1, num2, result} = plusCalculator();
            return num1, num2, result
        },
        created() {},
        mounted() {},
        unmounted() {},
        methods: {}
    }
</script>
<style scoped>
</style>
