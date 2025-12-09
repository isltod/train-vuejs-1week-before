<template>
    <div>
        <ul id="todo-list">
            <li v-for="todo in todoList" :key="todo.id" :class="{'is-done': todo.isDone}">
                {{ todo.content }}
                <button @click="updateTodo(todo.id)">완료</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["todoList"],
        methods: {
            updateTodo(id) {
                this.$emit("updateTodo", id);
            }
        }
    }
</script>