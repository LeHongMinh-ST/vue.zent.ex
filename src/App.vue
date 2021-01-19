<template>
  <div id="app">
    <!--    <Todo/>-->
    <!--    <Exercise/>-->
    <News/>
<!--    <Admin/>-->
  </div>
</template>

<script>

// import Admin from "@/components/Buoi4/Bai4.1/Admin";
import News from "@/components/Buoi4/Bai4.2/News";
export default {
  name: 'App',
  components: {
    News
    // Admin
  }
}
</script>

<style lang="scss">
html{
  height: 100%;
  body {
    margin: 0;
    height: 100%;

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
      margin: 0;

      height: 100%;
    }

  }
}


</style>
