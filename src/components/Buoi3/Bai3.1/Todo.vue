<template>
  <div class="container">
    <div class="todosWrap">
      <div class="headerTodosWrap">
        <div class="headerTodosText">
          <h2 class="todosText">Todo App</h2>
        </div>
        <div class="addTodoWrap">
          <input type="text" @keydown.enter="onInput()"
                 placeholder="Nhập công việc và nhấn enter để thêm" v-model="value">
        </div>
      </div>

      <div class="bodyTodosWrap">
        <div class="listTodo">
          <TodoItem v-if="todos.length > 0" :todos="todos" @deleteTodo="deleteEvent"/>
          <div v-else class="todoNone">
            Chưa có task nào được thêm
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/Buoi3/Bai3.1/TodoItem";

export default {
  name: "Todo",
  components: {
    TodoItem
  },
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    onInput() {
      let todo = {
        name: this.value,
        status: false
      }
      this.todos.push(todo);
      this.value = "";
    },
    deleteEvent(data) {
      this.todos = this.todos.filter((todo, index) => {
        return index != data;
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;

  .todosWrap {
    width: 600px;
    height: 650px;
    background-color: #ffffff;
    border-radius: 10px;

    .headerTodosWrap {
      margin-bottom: 30px;

      .headerTodosText {
        .todosText {
          color: #67cf8c !important;
        }
      }

      .addTodoWrap {
        margin: 0 auto;
        width: 100%;

        input {
          width: 85%;
          font-size: 16px;
          padding: 12px;
          border: 1px solid #ddd;
          outline: none;
          border-radius: 5px;
        }
        input:focus{
          border: 1px solid #4e99e4;
        }
      }
    }

    .bodyTodosWrap {
      height: 80%;

      .listTodo {
        overflow-y: scroll;
        height: 95%;
        width: 95%;
        position: relative;

        .todoNone{
          color: #ec577a;
          position: absolute;
          top:40%;
          left: 30%;
        }
      }
    }
  }
}
</style>