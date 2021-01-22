<template>
    <AdminLayout>
      <template v-slot:header-title>
        <h2>Quản lý hóa đơn</h2>
      </template>
      <template v-slot:main-content>
        <el-main>
          <div class="block">
            <span class="demonstration">Child options expand when clicked (default)</span>
            <el-cascader
                v-model="value"
                :options="options"
                @change="handleChange"></el-cascader>
          </div>
          <div class="block">
            <span class="demonstration">Child options expand when hovered</span>
            <el-cascader
                v-model="value"
                :options="options"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"></el-cascader>
          </div>

        </el-main>
      </template>
    </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout";
export default {
  name: "Dashboard",
  components:{
    AdminLayout
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    }
  },
}
</script>

<style scoped lang="scss">
.paginate{
  margin-top: 20px;
  text-align: right;
}
</style>