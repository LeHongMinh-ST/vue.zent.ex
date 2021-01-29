<template>
  <div class="FormWrap">
    <form id="ProductForm">
      <div class="headerForm">
        <h2>Sản phẩm</h2>
      </div>
      <div class="bodyForm">
        <div class="inputWrap">
          <label>Tên sản phẩm <span class="required">(*)</span></label>
          <input type="text" :class="{errorInput: errorName.length > 0 && product.name.length == 0}"
                 placeholder="Nhập tên sản phẩm" ref="name" @input="changeName($event.target.value)"
                 :value="product.name">
          <p class="error" v-if="errorName.length > 0 && product.name.length == 0">{{ errorName }}</p>
        </div>

        <div class="inputWrap">
          <label>Đơn giá <span class="required">(*)</span></label>
          <input type="text" :class="{errorInput: errorPrice.length > 0 && product.price.length == 0}"
                 placeholder="Nhập đơn giá sản phẩm" ref="price" @input="changePrice($event.target.value)"
                 :value="product.price">
          <p class="error" v-if="errorPrice.length > 0 && product.price.length == 0">{{ errorPrice }}</p>
        </div>

        <div class="inputWrap">
          <label>Số lượng <span class="required">(*)</span></label>
          <input type="text" :class="{errorInput: errorQty.length > 0 && product.quantity.length == 0}"
                 placeholder="Nhập số lượng sản phẩm" ref="quantity" @input="changeQuantity($event.target.value)"
                 :value="product.quantity">
          <p class="error" v-if="errorQty.length > 0 && product.quantity.length == 0">{{ errorQty }}</p>
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

import {mapGetters, mapMutations, mapState} from 'vuex';

export default {
  name: "ProductFrom",
  data() {
    return {}
  },
  methods: {

    ...mapMutations([
      'submitEvent',
      'resetBtn',
      'changeQuantity',
      'changePrice',
      'changeName',
      'setErrorName',
      'setErrorPrice',
      'setErrorQty',
      'btnClear'
    ])
    ,
    btnSubmit() {
      let validate = true;

      if (this.$refs.name.value == 0) {
        this.setErrorName("Tên sản phẩm không được để trống");
        validate = false;
      }

      if (this.$refs.price.value == 0) {
        this.setErrorPrice("Giá sản phẩm không được để trống");
        validate = false
      }

      if (this.$refs.quantity.value == 0) {
        this.setErrorQty("Số lượng sản phẩm không được để trống");
        validate = false
      }

      if (validate) {
        let data = {
          id: this.product.id,
          name: this.$refs.name.value,
          price: this.$refs.price.value,
          quantity: this.$refs.quantity.value
        }
        this.submitEvent(data);
        this.btnClear();
      }
    },

  },
  computed: {
    ...mapState([
      'products', 'btnCreate', 'product', 'errorName', 'errorPrice', 'errorQty'
    ]),
    ...mapGetters([])
  },
  watch: {}
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