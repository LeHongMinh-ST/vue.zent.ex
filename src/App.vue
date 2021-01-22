<template>
  <router-view/>
</template>

<script>
</script>
<style lang="scss">
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: Roboto,sans-serif;
  background: #f6f7f9!important;
  font-size: 14px;
  color: #253036;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &
    .router-link-exact-active {
      color: #42b983;
    }

  }
}
</style>
