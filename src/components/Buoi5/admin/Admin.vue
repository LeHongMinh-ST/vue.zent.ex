<template>
  <AdminLayout>
    <template v-slot:header-title>
      <h2>Tổng quan</h2>
    </template>
    <template v-slot:main-content>
      <el-main>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
          <el-table-column
              prop="date"
              label="Date"
              width="180">
          </el-table-column>
          <el-table-column
              prop="name"
              label="Name"
              width="180">
          </el-table-column>
          <el-table-column
              @size-change="handleSizeChange"
              prop="address"
              label="Address">
          </el-table-column>
        </el-table>
        <div class="paginate">
          <el-pagination
              background
              layout="total,prev, pager, next,jumper"
              :total="50">
          </el-pagination>
        </div>

      </el-main>
    </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout";

export default {
  name: "Admin",
  components: {
    AdminLayout
  },
}
</script>

<style scoped lang="scss">
.paginate{
  margin-top: 20px;
  text-align: right;
}
</style>