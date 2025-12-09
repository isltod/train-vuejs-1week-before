<template>
    <div>
        <h3>자식 컴포넌트 입니다.</h3>
        <p>제목: {{ title }}</p>
        <p>내용: {{ mainContent }}</p>
        <button @click="sendData">부모로 데이터 보내기</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
    // props 1
    // const props = defineProps(["title", "mainContent"]);
    // props 2
    // const props = defineProps({
    //     title: String,
    //     mainContent: String
    // })
    // props 3
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        mainContent: {
            type: String,
            required: true
        }
    })
    const title = ref("");
    const mainContent = ref("");
    onMounted(
        () => {
            title.value = props.title;
            mainContent.value = props.mainContent;
        }
    )

    const emit = defineEmits(["getChildMessage"]);
    const sendData = () => {
        emit("getChildMessage", "자식이 보낸 데이터");
    }
</script>