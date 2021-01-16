<template>
  <div id="app">
<!--    <Todo/>-->
    <Exercise/>
  </div>
</template>

<script>
// import Todo from "@/components/Buoi3/Bai3.1/Todo.vue"
import Exercise from "@/components/Buoi3/Bai3.2/Exercise";

export default {
  name: 'App',
  components: {
    // Todo
    Exercise
  }
}
</script>

<style lang="scss">
body {
  margin: 0;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin: 0;
  }

}

</style>
