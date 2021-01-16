<template>
  <div class="todoDetail">
    <div class="todoCheck">
      <input type="checkbox" @click="changStatus(index)" :checked="status">
    </div>
    <div class="todoText" :class="{todoSuccess : status}">
      {{ name }}
    </div>
    <div class="deleteTodo" v-if="status">
      <input type="button" value="Xóa" @click="deleteTodo(index)">
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'status', 'index'],
  name: "TodoItem",
  methods: {
    deleteTodo(index) {
      this.$emit('deleteTodo', index);
    },
    changStatus(index) {
      this.$emit('statusEvent', index)
    }
  }
}
</script>

<style scoped lang="scss">
.todoDetail {
  display: flex;
  width: 94%;
  margin-left: 30px;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #ddd;

  .todoCheck {
    margin: 0 15px;
  }

  .todoText {
    width: 70%;
    text-align: left;
  }

  .todoSuccess {
    text-decoration-line: line-through;
  }

  .deleteTodo {
    width: 10%;

    input {
      width: 100%;
      height: 35px;
      border-radius: 3px;
      color: #fff;
      border: unset;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      background-color: #dd1a00;
    }

  }
}
</style>