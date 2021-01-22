<template>
  <AdminLayout>
    <template v-slot:header-title>
      <h2>Quản lý chi nhánh</h2>
    </template>
    <template v-slot:main-content>
      <router-view/>>
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

<style scoped>
.paginate{
  margin-top: 20px;
  text-align: right;
}
</style>