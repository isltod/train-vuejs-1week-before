<script>
  import TodoInput from './components/TodoInput.vue';
  import TodoList from './components/TodoList.vue';
  import { v4 } from 'uuid';
  export default {
    components: {TodoInput, TodoList, v4},
    data() {
      return {
        todoList: [],
      }
    },
    methods: {
      addNewTodo(newTodoContent) {
        const newTodo = {id: v4(), content: newTodoContent, isDone: false}
        this.todoList.push(newTodo);
      },
      toggleDoneStatus(id) {
        this.todoList = this.todoList.map(
          todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        )
      }
    }
  }
</script>

<template>
  <div class="todo-container">
    <h1>할일 관리</h1>
    <TodoInput @add-todo="addNewTodo" />
    <TodoList :todo-list="todoList" @update-todo="toggleDoneStatus" />
    <!-- <p>{{ JSON.stringify(todoList) }}</p> -->
  </div>
</template>
