<template>
  <div class="container">
    <ProductFrom @submitEvent="submitEvent" :id="product.id" :name="product.name" :quantity="product.quantity"
                 :price="product.price"
                 :btnCreate="btnCreate"/>
    <ProductList :products="products" @clearForm="clearEvent" @changePageEvent="changePage" @editEvent="editProcess" @deleteEvent="deleteProcess" :pagination="pagination"/>
  </div>

</template>

<script>
import ProductFrom from "@/components/Buoi3/Bai3.2/ProductFrom";
import ProductList from "@/components/Buoi3/Bai3.2/ProductList";

export default {
  name: "Exercise",
  components: {
    ProductFrom,
    ProductList
  },
  data() {
    return {
      product: {
        id: "",
        name: "",
        price: "",
        quantity: "",
        status: false
      },
      btnCreate: "Tạo mới",
      pagination: {
        limit: 5,
        page: 1,
      },
      products: [],
    }
  },
  methods: {
    submitEvent(data) {
      this.product.id = data.id.length > 0 ? data.id : 'SP' + new Date().getTime();
      this.product.name = data.name;
      this.product.price = data.price;
      this.product.quantity = data.quantity;
      this.product.status = data.quantity > 0 ? true : false;

      if (data.id.length == 0) {
        this.product.id = 'SP' + new Date().getTime();
        this.product.name = data.name;
        this.product.price = data.price;
        this.product.quantity = data.quantity;
        this.product.status = data.quantity > 0 ? true : false;
        this.products.push(Object.assign({}, this.product));

        this.product.id = "";
        this.product.name = "";
        this.product.price = "";
        this.product.quantity = "";
        this.product.status = false;

      } else {
        this.products.map((product) => {
          if (product.id == data.id) {
            product.name = data.name;
            product.price = data.price;
            product.quantity = data.quantity;
            product.status = data.quantity > 0;
          }
        })
      }

    },
    editProcess(data) {
      this.btnCreate = "Cập nhập";
      this.product = this.products.find((product) => {
        return product.id == data;
      });
    },

    deleteProcess(data) {
      this.products = this.products.filter((product) => {
        return product.id != data;
      })
    },

    changePage(value){
      console.log(value)
      this.pagination.page += Number(value);
    },

    clearEvent(){
      this.product.name = "";
      this.product.price = "";
      this.product.quantity = "";
    }
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