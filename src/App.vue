<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Lesson1/> -->
    <!-- <Lesson2/> -->
    <!-- <Lesson3/> -->
    <Cart/>
<!--    <Cart2/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Lesson1 from './components/Lesson1.vue'
// import Lesson2 from './components/Lesson2.vue'
// import Lesson3 from './components/Lesson3.vue'

import Cart from './components/Buoi2/Cart.vue'
// import Cart2 from "@/components/Buoi2/Cart2";


export default {
  name: 'App',
  components: {
    Cart,
    // Lesson1,
    // Lesson2,
    // Lesson3
    // Cart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
