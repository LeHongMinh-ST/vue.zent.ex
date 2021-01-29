<template>
  <div class="cartWrap">
    <h3 class="headCart">Giỏ hàng</h3>
    <table v-if="carts.length > 0" class="listCart">
      <thead>
      <tr>
        <th width="70%"></th>
        <th width="15%"></th>
        <th width="15%"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, index) in carts" :key="index">
        <td class="infoItem">
          <img
              v-if="product.image.length > 0"
              :src="product.image"
              alt=""
          />
          <img
              v-else
              alt=""
              :src="defaulImg"
          />
          <div class="detailItem">
            <p class="productName">{{ product.name }}</p>
            <p>{{ product.price.toLocaleString('vi-VI') }} đ</p>
          </div>
        </td>
        <td><input type="number" class="quantityInput" min="0"
                   @input="EventOnChange(product.id, $event.target.value)"
                   :value="product.quantity"></td>
        <td><input type="button" class="clearButton" @click="deleteProduct(product.id)" value="Xóa"></td>
      </tr>
      </tbody>
    </table>
    <div v-else class="cartNull">
      <div>Không có sản phẩm nào được thêm vào giỏ</div>
    </div>
    <div class="cartTotal">
      <div class="total">Tổng tiền : {{ total.toLocaleString('vi-VI') }} đ</div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex';

export default {
  name: "Cart",
  methods: {
    ...mapMutations([
      'deleteProduct', 'onChange'
    ]),
    EventOnChange(id, value) {
      let data = {
        id: id,
        value: value,
      };
      this.onChange(data)
    }
  },
  computed: {
    ...mapState([
      'carts', 'defaulImg'
    ]),
    ...mapGetters([
      'total'
    ])
  },
}
</script>

<style scoped lang="scss">
.cartWrap {
  width: 32%;
  border: 1px solid #ddd;
  height: 600px;
  position: relative;

  .cartTotal {
    position: absolute;
    right: 30px;
    bottom: 30px;

    .total {
      font-weight: bold;
      color: red;
      font-size: 18px;
    }
  }

  .cartNull {
    position: absolute;
    top: 25%;
    left: 20%;
  }

  .headCart {
    text-align: left;
    margin-left: 25px;
  }

  table {
    border-collapse: collapse;
    margin: 0 auto;

    th {
      //padding: 25px 0px 15px 0px;
      //font-size: 20px;
      //text-align: left;
    }

    tbody {
      tr {
        border-bottom: 1px solid #ddd;
        margin: 0;

        .infoItem {
          display: flex;

          img {
            float: left;
            margin-right: 10px;
          }

          .detailItem {
            line-height: 30px;

            p {
              margin: 0;
              text-align: left;
            }

            .productName {
              font-weight: bold;
              width: 280px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }

        td {
          padding: 15px 0px;

          img {
            width: 60px;
            // margin-right: 10px;
          }

          .quantityInput {
            padding: 10px;
            outline: none;
            border: 1px solid #ddd;
            width: 50px;
            margin-right: 5px;
          }

          .clearButton {
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
    }
  }
}

</style>