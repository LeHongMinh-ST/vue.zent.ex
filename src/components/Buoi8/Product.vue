<template>
  <div class="productWarp">
    <div class="headerWarp">
      <div class="headerCreate">
        <el-button type="success" icon="el-icon-plus" size="small" @click="createProdut()">Thêm mới
        </el-button>
      </div>
      <div class="headerFilter">
        <el-input placeholder="Nhập tên sản phẩm cần tìm" auto-complete="on" v-model="input" @keydown.enter.native="filter"></el-input>
        <el-button icon="el-icon-close" v-if="input.length>0" @click="clear()" circle></el-button>
      </div>
    </div>
    <div class="contentWarp">
      <div class="mainContent">
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
              fixed
              prop="name"
              label="Tên">
          </el-table-column>
          <el-table-column
              prop="description"
              label="Mô tả">
          </el-table-column>
          <el-table-column
              prop="price"
              label="Giá">
            <template v-slot="product">
              {{new Intl.NumberFormat().format(product.row.price)}} đ
            </template>
          </el-table-column>
          <el-table-column
              prop="created_at"
              label="Ngày tạo">
            <template v-slot="product">
              {{formatDate(product.row.created_at)}}
            </template>
          </el-table-column>
          <el-table-column
              label="Hành động"
              width="120"
          >
            <template v-slot="product">
              <el-button type="primary" icon="el-icon-edit" circle @click="editProdut(product.row)"></el-button>
              <el-button type="danger" icon="el-icon-delete" circle @click="deleteProduct(product.row.id)"></el-button>
            </template>

          </el-table-column>
        </el-table>
      </div>
      <div class="paginationWarp">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="pageSize"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>

      <el-dialog title="Tạo mới sản phẩm" :visible.sync="dialogFormCreate">
        <el-form :model="form" ref="formCreate" :rules="rules">
          <el-form label-width="100px"  :model="form">
            <el-form-item label="Tên sản phẩm">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Mô tả">
              <el-input type="textarea" v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item label="Giá">
              <el-input type="number" v-model="form.price"></el-input>
            </el-form-item>
          </el-form>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormCreate = false">Đóng</el-button>
        <el-button type="primary" @click="submitCreate()">Tạo mới</el-button>
      </span>
      </el-dialog>

      <el-dialog title="Cập nhật sản phẩm" :visible.sync="dialogFormUpdate">
        <el-form :model="form">
          <el-form label-width="100px" :model="form">
            <el-form-item label="Tên sản phẩm">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Mô tả">
              <el-input type="textarea" v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item label="Giá">
              <el-input type="number" v-model="form.price"></el-input>
            </el-form-item>
          </el-form>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormUpdate = false">Đóng</el-button>
        <el-button type="primary" @click="submitEdit(form.id)">Lưu</el-button>
      </span>
      </el-dialog>
    </div>


    <!--modal-->
  </div>

</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: "Product",
  methods: {
    handleClick() {
      console.log('click');
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        params:{
          page:this.currentPage
        }
      }).then((response) => {
        console.log(response)
        this.tableData = response.data.data.data;
        this.currentPage = response.data.data.current_page
      }).catch((error) => {
        console.log(error);
      });
    },
    getList() {
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products',
      }).then((response) => {
        console.log(response)
        this.tableData = response.data.data.data;
        this.pageSize = response.data.data.per_page;
        this.total = response.data.data.total;
        this.currentPage = response.data.data.current_page
      }).catch((error) => {
        console.log(error);
      });
    },
    filter() {
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        params: {
          q: this.input
        }
      }).then((response) => {
        this.pageSize = response.data.data.per_page;
        this.total = response.data.data.total;
        this.currentPage = response.data.data.current_page
        this.tableData = response.data.data.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    clear() {
      this.input = '';
      this.getList()
    },
    resetForm() {
      this.form = {
        id: '',
        name: '',
        description: '',
        price: ''
      }
    }
    ,
    createProdut() {
      this.resetForm()
      this.dialogFormCreate = true
    },
    editProdut(product) {
      this.resetForm()
      this.form = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price
      }
      this.dialogFormUpdate = true
    },
    submitCreate() {
      this.$refs.formCreate.validate((valid) => {
        if (valid) {
          axios({
            method: 'post',
            url: 'http://vuecourse.zent.edu.vn/api/products',
            data: this.form
          }).then((response) => {
            if (response.status === 200) {
              this.$message({
                message: 'Tạo mới thành công',
                type: 'success'
              });
              this.getList()
              this.dialogFormCreate = false;
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },
    submitEdit() {
      axios({
        method: 'put',
        url: 'http://vuecourse.zent.edu.vn/api/products/' + this.form.id,
        data: this.form
      }).then((response) => {
        if (response.status === 200) {
          this.$message({
            message: 'Cập nhật thành công',
            type: 'success'
          });
          this.getList()
          this.dialogFormUpdate = false;
        }
      })
    },
    deleteProduct(id) {
      this.$confirm('Dữ liệu không thể phục hồi. Có muốn tiếp tục?', 'Cảnh báo', {
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Đóng',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'delete',
          url: 'http://vuecourse.zent.edu.vn/api/products/' + id,
          data: this.form
        }).then((response) => {
          if (response.status === 200) {
            this.$message({
              message: 'Xóa thành công',
              type: 'success'
            });
            this.getList()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Hủy bỏ thao tác thành công'
        });
      });
    },
    formatDate (dateString) {
      // Format từ dạng "02/24/2021 18:12:23" thành định dạng kiểu: "24/02/2021"
      return moment(dateString).format('hh:mm | DD/MM/YYYY')
    }
  },
  data() {
    return {
      tableData: [],
      input: '',
      dialogFormCreate: false,
      dialogFormUpdate: false,
      titleForm: 'Tạo mới sản phẩm',
      type: 'post',
      form: {
        id: '',
        name: '',
        description: '',
        price: '',
      },
      currentPage: 1,
      pageSize: 5,
      total:0,
      rules: {
        name: [
          { required: true, message: 'Vui lòng nhập tên sản phẩm', trigger: 'blur' },
          { max: 25, message: 'Độ dài tên sản phẩm không quá 25 kí tự', trigger: 'blur' }
        ],
      }
    }
  },
  mounted() {
    this.getList();
  }
}
</script>

<style scoped lang="scss">
.productWarp {
  width: 50%;
  margin: 50px auto;

  .headerWarp {
    .headerCreate {
      margin: 15px 0px;
    }

    .headerFilter {
      display: flex;
      width: 50%;
      margin-bottom: 15px;

      .el-input {
        margin-right: 10px;
      }
    }
  }

  .contentWarp {
    .paginationWarp {
      margin-top: 10px;
      text-align: center;
    }
  }
}
</style>