<template>
  <div class="FormWrap">
    <form id="ProductForm" >
      <div class="headerForm">
        <h2>Sản phẩm</h2>
      </div>
      <div class="bodyForm">
        <div class="inputWrap">
          <label>Tên sản phẩm <span class="required">(*)</span></label>
          <input type="text" :class="{errorInput: errorName.length > 0 && name.length == 0}"
                 placeholder="Nhập tên sản phẩm"
                 v-model="name">
          <p class="error" v-if="errorName.length > 0 && name.length == 0">{{ errorName }}</p>
        </div>

        <div class="inputWrap">
          <label>Đơn giá <span class="required">(*)</span></label>
          <input type="text" :class="{errorInput: errorName.length > 0 && price.length == 0}"
                 placeholder="Nhập đơn giá sản phẩm"
                 v-model="price">
          <p class="error" v-if="errorPrice.length > 0 && price.length == 0">{{ errorPrice }}</p>
        </div>

        <div class="inputWrap">
          <label>Số lượng <span class="required">(*)</span></label>
          <input type="text" :class="{errorInput: errorQty.length > 0 && quantity.length == 0}"
                 placeholder="Nhập số lượng sản phẩm"
                 v-model="quantity">
          <p class="error" v-if="errorQty.length > 0 && quantity.length == 0">{{ errorQty }}</p>
        </div>
      </div>

      <div class="footerForm">
        <input type="button" class="createBtn" @click="btnSubmit()" :value="btnCreate">
        <input type="button" class="clearBtn" @click="btnClear()" value="Hủy">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductFrom",
  props: ['name', 'price', 'quantity','btnCreate','id'],
  data() {
    return {
      errorName: "",
      errorPrice: "",
      errorQty: ""
    }
  },
  methods: {
    btnSubmit() {
      let validate = true;

      if (this.name.length == 0) {
        this.errorName = "Tên sản phẩm không được để trống";
        validate = false;
      }

      if (this.price.length == 0) {
        this.errorPrice = "Giá sản phẩm không được để trống";
        validate = false
      }

      if (this.quantity.length == 0) {
        this.errorQty = "Số lượng sản phẩm không được để trống";
        validate = false
      }

      console.log(validate)
      if(validate){
        let data = {
          id: this.id,
          name: this.name,
          price: this.price,
          quantity: this.quantity
        }
        this.$emit('submitEvent', data);
      }
    },
    btnClear() {
      this.name = "";
      this.price = "";
      this.quantity = "";

      this.errorQty = "";
      this.errorName = "";
      this.errorPrice = "";
    }
  }
}
</script>

<style scoped lang="scss">
.FormWrap {
  border: 1px solid #ddd;
  //padding: 24px;
  height: 500px;
  width: 30%;
  margin-right: 40px;

  #ProductForm {
    margin: 24px;
    height: 100%;

    .headerForm {
      text-align: left;

      h2 {
        margin-top: 0;
        color: #0080dd;
      }
    }

    .bodyForm {
      .inputWrap {
        text-align: left;
        margin: 10px 0;

        label {
          width: 100%;
          font-size: 16px;
          font-weight: bold;
          text-align: left;

          .required {
            color: #ee526d;
          }
        }

        input {
          width: 100%;
          padding: 12px 12px;
          margin: 8px 0;
          outline: none;
          border: 1px solid #ddd;
          border-radius: 5px;
          box-sizing: border-box;
          font-size: 16px;

        }

        .errorInput {
          border-color: #ee526d !important;
        }

        .error {
          color: #ee526d;
          margin-top: 0;
        }
      }
    }

    .footerForm {
      text-align: right;

      input {
        height: 40px;
        border-radius: 5px;
        color: #fff;
        border: unset;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
      }

      .createBtn {
        color: white;
        background-color: #0080dd;
        padding: 12px 15px;
        margin-right: 10px;
      }

      .clearBtn {
        color: #000000;
        background-color: #d8e0ea;
        padding: 12px 25px;
      }

    }
  }
}
</style>