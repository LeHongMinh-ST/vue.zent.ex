<template>
  <div class="container">
    <div class="cartWrap">
      <div class="inputWrap">
        <input
            :style="{
            border: color,
            backgroundImage: 'url(' + imageFilter + ')',
          }"
            placeholder="Tìm kiếm theo tên sản phẩm"
            type="text"
            @blur="removeColor()"
            @focus="changeColor()"
            @keydown.enter="onEnter()"
            v-model="text"
        />
        <img :src="imageFilter" alt="" class="imgFilter">
        <i v-show="text.length > 0" class="clearFilter" @click="clearFilter()">&times;</i>
      </div>

      <div class="tableWrap">
        <table id="tableCart">
          <thead>
          <tr>
            <th width="5%">STT</th>
            <th width="50%">Sản phẩm</th>
            <th width="15%">Giá</th>
            <th width="15%">Số lượng</th>
            <th width="15%">Trạng thái</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product, index) in list" :key="index">
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
          </tr>
          </tbody>
          <tbody v-if="this.value.length > 0 && this.filters.length == 0">
          <tr>
            <td colspan="5">Không có dữ liệu</td>
          </tr>
          </tbody>

        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      imageFilter:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png",
      defaulImg:"https://www.tibs.org.tw/images/default.jpg",
      value: "",
      text: "",
      products: [
        {
          name: "iPhone 12 Pro Max Chính Hãng",
          image:
              "https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png",
          price: 32990000,
          quantity: 566,
          isAvailable: true,
        },
        {
          name: "iPhone 12 Chính Hãng (VN/A)",
          image: "",
          price: 21790000,
          quantity: 123,
          isAvailable: true,
        },
        {
          name: "iPhone 11 Chính hãng",
          image:
              "https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg",
          price: 16690000,
          quantity: 0,
          isAvailable: false,
        },
        {
          name: "Apple iPhone XR 64GB Chính hãng(VN/A)",
          image:
              "https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg",
          price: 12190000,
          quantity: 1023,
          isAvailable: true,
        },
        {
          name: "iPhone 11 Pro Max Chính hãng(VN/A)",
          image: "",
          price: 26500000,
          quantity: 45,
          isAvailable: true,
        },
      ],
      color: "",
      name: "",
      filters: [],
    };
  },
  methods: {
    changeColor() {
      this.color = "2px solid #4e99e4";
    },
    removeColor() {
      this.color = "";
    },
    clearFilter() {
      this.text = "";
      this.value = this.text;
    },
    onEnter() {
      this.value = this.text;
      this.filters = [];
      this.products.map((product) => {
        if (product.name.toLowerCase().includes(this.value.toLowerCase())) {
          this.filters.push(product);
        }
      });
    },
  },
  computed: {
    list() {
      return this.value.length > 0 ? this.filters : this.products;
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 1440px;

  .cartWrap {
    width: 75%;
    margin-left: 50px;

    .inputWrap {
      width: 30%;
      margin-bottom: 25px;
      position: relative;

      input {
        background-position: 10px 12px;
        background-repeat: no-repeat;
        width: 100%;
        font-size: 16px;
        padding: 12px 20px 12px 40px;
        border: 1px solid #ddd;
        margin-bottom: 12px;
        outline: none;
        border-radius: 2px;
      }

      input::-ms-clear {
        display: none;
      }

      .imgFilter {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 40px;
        line-height: 45px;
        width: 25px;
      }

      .clearFilter {
        position: absolute;
        top: 0;
        left: 355px;
        font-size: 40px;
        line-height: 45px;
        cursor: pointer;
      }
    }

    .tableWrap {
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
      }
    }
  }
}
</style>