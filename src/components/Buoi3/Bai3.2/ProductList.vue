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
        <td>{{ product.name }}</td>
        <td>{{ Number(product.price).toLocaleString("vi-VN") }} đ</td>
        <td>{{ product.quantity }}</td>
        <td>
          <span v-if="product.status" style="color: #79d189">Còn hàng</span>
          <span v-else style="color: #f18083">Hết hàng</span>
        </td>
        <td>
          <input type="button" class="btnEdit" :disabled="pagination.page == 1" @click="editProduct(product.id)"
                 value="Sửa">
          <input type="button" class="btnDelete"
                 :disabled="pagination.page == Math.ceil(products.length / pagination.limit)"
                 @click="deleteProduct(product.id)" value="Xóa">
        </td>
      </tr>
      </tbody>
    </table>
    <div class="pagination">
      <div class="textPagonation"><p>{{ textPagonation }}</p></div>
      <div class="btnPagination">
        <input class="prevPagination" type="button" @click="changePage(-1)" value="<">
        <input class="nextPagination" type="button" @click="changePage(+1)" value=">">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: ['products', 'pagination'],
  methods: {
    editProduct(data) {
      this.$emit('editEvent', data)
    },
    deleteProduct(data) {
      this.$emit('deleteEvent', data)
    },
    changePage(value) {
      let limit = this.pagination.limit;
      let page = this.pagination.page;
      let totalPage = Math.ceil(this.products.length / limit);

      if (page + value <= totalPage && page + value > 0) {
        this.$emit('changePageEvent', value);
      }
    }

  },
  computed: {
    list: function () {
      let limit = this.pagination.limit;
      let page = this.pagination.page;
      let totalPage = Math.ceil(this.products.length / limit);
      let start = limit * (page - 1);
      let end = page == totalPage ? this.products.length : start + limit;
      return this.products.slice(start, end);
    },
    textPagonation() {
      let limit = this.pagination.limit;
      let page = this.pagination.page;
      let totalPage = Math.ceil(this.products.length / limit);
      let start =this.products.length > 0 ? limit * (page - 1) + 1 : 0;
      let end = page === totalPage ? this.products.length : start + limit - 1;
      return 'Hiển thị ' + start + '-' + end + ' trên tổng ' + this.products.length + ' (' + totalPage + ' trang)';
    }
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