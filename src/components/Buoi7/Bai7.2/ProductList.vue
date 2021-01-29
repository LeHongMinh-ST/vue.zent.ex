<template>
  <div class="ProductWrap">
    <table id="ProductTable">
      <thead>
      <tr>
        <th>Mã sản phẩm</th>
        <th>Tên sản phẩm</th>
        <th>Giá</th>
        <th>Số lượng</th>
        <th>Trạng thái</th>
        <th>Hành động</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product) in list" :key="product.id">
        <td>{{ product.id }}</td>
        <td class="productName">{{ product.name }}</td>
        <td>{{ Number(product.price).toLocaleString("vi-VN") }} đ</td>
        <td>{{ product.quantity }}</td>
        <td>
          <span v-if="product.status" style="color: #79d189">Còn hàng</span>
          <span v-else style="color: #f18083">Hết hàng</span>
        </td>
        <td>
          <input type="button" class="btnEdit" @click="editProcess(product.id)"
                 value="Sửa">
          <input type="button" class="btnDelete"
                 @click="deleteProcess(product.id)" value="Xóa">
        </td>
      </tr>
      <tr v-if="products.length == 0">
        <td colspan="6"> Không có dữ liệu</td>
      </tr>
      </tbody>
    </table>
    <div class="pagination">
      <div class="textPagonation"><p>{{ textPagonation }}</p></div>
      <div class="btnPagination">
        <input class="prevPagination" type="button" :disabled="pagination.page == 1" @click="changePage(-1)" value="<">
        <input class="nextPagination" type="button"
               :disabled="pagination.page == Math.ceil(products.length / pagination.limit) || products.length == 0"
               @click="changePage(+1)"
               value=">">
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
  name: "ProductList",
  methods: {
    ...mapMutations([
    'editProcess','deleteProcess','changePage'
    ]),
  },
  computed: {
    ...mapGetters([
        'list','textPagonation'
    ]),
    ...mapState([
        'products','pagination'
    ]),


  }

}
</script>

<style scoped lang="scss">
.ProductWrap {
  padding: 24px;
  height: 500px;
  width: 65%;

  #ProductTable {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ddd;

    thead {
      tr {
        th {
          padding: 16px;
          border: 1px solid #ddd;
          background-color: #f2f6fe;
        }
      }
    }

    tbody {
      tr {
        .productName{
          text-align: left;
          color: #5591e0;
        }
        td {

          border-left: 1px solid #ddd;
          padding: 20px;

          input {
            height: 40px;
            border-radius: 5px;
            color: #fff;
            border: unset;
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
            padding: 12px 15px;
            margin-right: 10px;
            color: white;
          }

          .btnEdit {
            background-color: #F2994A;
          }

          .btnDelete {
            background-color: #EE4F5E;
          }
        }
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btnPagination {
      input {
        padding: 6px 10px;
        margin-left: 3px;
      }
    }
  }
}
</style>