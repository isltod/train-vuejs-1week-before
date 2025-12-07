<template>
    <ProvideInjectChild />
</template>
<script>
    import ProvideInjectChild from './ProvideInjectChild.vue';
    export default {
        components: {ProvideInjectChild},
        data() {
            return {
                items: ['A', 'B']
            };
        },
        provide() {
            return {
                itemLength: this.items.itemLength
            };
        }
    }
</script>