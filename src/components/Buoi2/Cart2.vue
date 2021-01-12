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
          <tr v-for="(product, index) in products" :key="index">
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
            <td><input type="button" class="inputAddCart" @click="addProduct(product.id)" value="Thêm vào giỏ"></td>
          </tr>
          </tbody>


        </table>
      </div>
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
                       @keydown.enter="onchange(product.id,$event.target.value)"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart2",
  data() {
    return {
      defaulImg: "https://www.tibs.org.tw/images/default.jpg",
      value: "",
      products: [
        {
          id: 1,
          name: 'iPhone 12 Pro Max Chính Hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
          price: 32990000,
          quantity: 566,
          isAvailable: true,
        },
        {
          id: 2,
          name: 'iPhone 12 Chính Hãng (VN/A)',
          image: '',
          price: 21790000,
          quantity: 123,
          isAvailable: true,
        },
        {
          id: 3,
          name: 'iPhone 11 Chính hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
          price: 16690000,
          quantity: 0,
          isAvailable: false,
        },
        {
          id: 4,
          name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
          price: 12190000,
          quantity: 1023,
          isAvailable: true,
        },
        {
          id: 5,
          name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
          image: '',
          price: 26500000,
          quantity: 6,
          isAvailable: true,
        }
      ],
      carts: [],
      isNotData: false,
    };
  },
  methods: {
    addProduct(id) {
      let newProduct = [];
      let isCart = false;
      this.products.forEach((product) => {
        if (product.id == id) {
          newProduct = Object.assign({}, product);
        }
      });

      if (newProduct.quantity > 0) {
        this.carts.forEach((cart) => {
          if (newProduct.id == cart.id) {
            if (newProduct.quantity > cart.quantity) {
              cart.quantity++;
            } else {
              alert('Sản phẩm hết hàng')
            }
            isCart = true;
          }
        })

        if (!isCart) {
          newProduct.quantity = 1;
          this.carts.push(newProduct);
        }
      } else {
        alert('Sản phẩm hết hàng');
      }
    },
    deleteProduct(id) {
      this.carts = this.carts.filter((cart) => {
        return cart.id != id;
      });
    },
    onchange(id, value) {
      let item = this.products.filter((item) => {
        return item.id == id;
      })

      if (item[0].quantity >= value) {
        if (value == 0) {
          this.carts = this.carts.filter((cart) => {
            return cart.id != id;
          });
        }

        this.carts.forEach((cart) => {
          if (cart.id == id) {
            cart.quantity = value;
          }
        })
      } else {
        alert('Sản phẩm hết hàng')
      }

    }
  },
  computed: {
    total() {
      let total = 0;

      this.carts.forEach((cart) => {
        total = total + +cart.quantity * cart.price;
      });

      return total;
    }
  }
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