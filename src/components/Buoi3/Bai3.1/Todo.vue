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
          <TodoItem v-for="(todo,index) in todos" :key="index" :name="todo.title" :index="index"
                    :status="todo.is_complete"
                    @deleteTodo="deleteEvent" @statusEvent="statusEvent"/>
          <div v-if="todos.length == 0" class="todoNone">
            Chưa có task nào được thêm
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/Buoi3/Bai3.1/TodoItem";
import axios from 'axios'
import _ from 'lodash'

export default {

  name: "Todo",
  components: {
    TodoItem
  },
  data() {
    return {
      todos: [],
      value: "",
    }
  },
  methods: {
    getNotCompleteTodos () {
      return _.filter(this.todos, {isComplete: false})
    },
    onInput() {
      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/todos',
        data: {
          title: this.value,
        }
      }).then((response) => {
        if (response.status === 200) {
          this.$message({
            message: 'Tạo mới thành công',
            type: 'success'
          });
          this.getToDoList();
          this.value = "";

        }
      })
    },
    deleteEvent(data) {
      console.log(data)

      this.todo = this.todos.find((todo, index) => {
        return index == data;
      })

      axios({
        method: 'delete',
        url: 'http://vuecourse.zent.edu.vn/api/todos/' + this.todo.id,
      }).then((response) => {
        if (response.status === 200) {
          this.getToDoList();
          this.$message({
            message: 'Xóa thành công',
            type: 'success'
          });
        }
      }).catch((error) => {
        // handle error
        console.log(error);
      });
    },
    statusEvent(data) {
      this.todo = this.todos.find((todo, index) => {
        return index == data;
      })

      let is_complete  = this.todo.is_complete === 1 ? 0 : 1;

      axios({
        method: 'put',
        url: 'http://vuecourse.zent.edu.vn/api/todos/' + this.todo.id,
        data:{
          is_complete: is_complete
        }
      }).then((response) => {
        if (response.status === 200) {
          this.getToDoList();


          this.$message({
            message: 'Cập nhật thành công',
            type: 'success'
          });
        }
      }).catch((error) => {
        // handle error
        console.log(error);
      });
    },
    getToDoList(){
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/todos',
      }).then((response) => {
        this.todos = response.data.data.data;
      }).catch((error) => {
        // handle error
        console.log(error);
      });
    }
  },
  mounted() {
    axios({
      method: 'get',
      url: 'http://vuecourse.zent.edu.vn/api/todos',
    }).then((response) => {
      this.todos = response.data.data.data;
    }).catch((error) => {
      // handle error
      console.log(error);
    });
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0080dd;
  margin: 0;
  height: 1000px;

  .todosWrap {
    width: 600px;
    height: 650px;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 0px 10px;

    .headerTodosWrap {
      margin: 30px 0;

      .headerTodosText {
        .todosText {
          color: #67cf8c !important;
        }
      }

      .addTodoWrap {
        margin: 0 auto;
        width: 100%;

        input {
          width: 100%;
          box-sizing: border-box;
          font-size: 16px;
          padding: 12px;
          border: 1px solid #ddd;
          outline: none;
          border-radius: 5px;
        }

        input:focus {
          border: 1px solid #4e99e4;
        }
      }
    }

    .bodyTodosWrap {
      height: 80%;

      .listTodo {
        overflow-y: auto;
        height: 95%;
        width: 95%;
        position: relative;

        .todoNone {
          color: #ec577a;
          position: absolute;
          top: 40%;
          left: 35%;
        }
      }
    }
  }
}
</style>