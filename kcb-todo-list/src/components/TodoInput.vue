<template>
    <div id="todo-form">
        <input type="text" id="todo-input" placeholder="새 할일을 입력하세요." v-model="newTodoContent">
        <button @click="addTodo">추가</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newTodoContent: '',
            }
        },
        methods: {
            addTodo() {
                this.$emit("addTodo", this.newTodoContent);
                this.newTodoContent = "";
            }
        }
    }
</script>