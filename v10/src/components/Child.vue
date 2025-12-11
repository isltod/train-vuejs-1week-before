<template>
    <div>
        <p>
            <!-- 자식에서 본 데이터: {{ props.childData }} -->
            자식에서 본 데이터: {{ childData }}
        </p>
        <!-- <input type="text" v-model="inputText" @input="deliverData"> -->
        자식에서 값 변경: <input type="text" v-model="childData" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

    // const inputText = ref("")
    // const props = defineProps({
    //     childData: String
    // })
    // const emit = defineEmits(["onChildInput"])
    // const deliverData = () => {
    //     emit("onChildInput", inputText)
    // }
    const childData = defineModel()
</script>