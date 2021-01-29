<template>
  <div class="container">
    <div class="productWrap">
      <div class="tableWrap">
        <table id="tableCart">
          <thead>
          <tr>
            <th width="5%">STT</th>
            <th>Sản phẩm</th>
            <th width="13%">Giá</th>
            <th width="13%">Số lượng</th>
            <th width="13%">Trạng thái</th>
            <th width="13%">Hành động</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product, index) in products1" :key="index">
            <td>{{ index + +1 }}</td>
            <td class="productName">
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
              {{ product.name }}
            </td>
            <td>{{ product.price.toLocaleString("vi-VN") }} đ</td>
            <td>{{ product.quantity }}</td>
            <td
                :class="{ redColor: !product.isAvailable }"
                class="status"
            >
              <span v-if="!product.isAvailable">Hết hàng</span>
              <span v-else>Còn hàng</span>
            </td>
            <td><input type="button" class="inputAddCart" @click="addProduct(product.id)" value="Thêm vào giỏ">
            </td>
          </tr>
          </tbody>


        </table>
      </div>
      <Cart/>
    </div>
  </div>
</template>

<script>
import Cart from "@/components/Buoi7/Bai7.1/Cart";
import {mapGetters, mapMutations, mapState} from 'vuex';

export default {
  name: "Product",
  components: {
    Cart
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations([
      'addProduct'
    ])
  },
  computed: {
    ...mapState([
      'products1','defaulImg',
    ]),
    ...mapGetters([
      'total'
    ])
  },
};
</script>

<style lang="scss">
.container {
  width: 1800px;

  .productWrap {
    width: 100%;
    display: flex;
    //align-items: center;

    .tableWrap {
      width: 60%;
      margin: 0 50px;

      #tableCart {
        border-collapse: collapse;
        border: 1px solid #ddd;
        width: 100%;

        th {
          background-color: #ecf2fd;
          border: 1px solid #ddd;
          padding: 15px;
        }

        td {
          border-left: 1px solid #ddd;
          padding: 15px;

          img {
            width: 50px;
            // margin-right: 10px;
          }
        }

        .status {
          color: #79d189;
        }

        .redColor {
          color: #f18083 !important;
        }

        .productName {
          display: flex;
          align-items: center;
          color: #5591e0;

          img {
            margin-right: 10px;
          }
        }

        .inputAddCart {
          padding: 0 15px;
          height: 35px;
          border-radius: 3px;
          color: #fff;
          border: unset;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
          background-color: #0080dd;
        }
      }
    }

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
  }
}
</style>