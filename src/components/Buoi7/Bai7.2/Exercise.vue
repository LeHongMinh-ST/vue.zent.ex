<template>
  <div class="container">
    <ProductFrom/>
    <ProductList/>
  </div>

</template>

<script>
import ProductFrom from "@/components/Buoi7/Bai7.2/ProductFrom";
import ProductList from "@/components/Buoi7/Bai7.2/ProductList";
export default {
  name: "Exercise",
  components: {
    ProductFrom,
    ProductList
  },

}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 90%;
}
</style>