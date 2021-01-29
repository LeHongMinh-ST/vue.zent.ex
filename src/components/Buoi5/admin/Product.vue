<template>
  <AdminLayout>
    <template v-slot:header-title>
      <h2>Quản lý sản phẩm</h2>
    </template>
    <template v-slot:main-content>
      <el-main>
        <el-calendar v-model="value">
        </el-calendar>
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
      value: new Date()
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