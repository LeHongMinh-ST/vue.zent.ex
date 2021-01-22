<template>
  <AdminLayout>
    <template v-slot:header-title>
      <h2>Báo cáo thống kê</h2>
    </template>
    <template v-slot:main-content>
      <el-main>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Consistency" name="1">
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </el-collapse-item>
          <el-collapse-item title="Feedback" name="2">
            <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
            <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
          </el-collapse-item>
          <el-collapse-item title="Efficiency" name="3">
            <div>Simplify the process: keep operating process simple and intuitive;</div>
            <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
            <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
          </el-collapse-item>
          <el-collapse-item title="Controllability" name="4">
            <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
            <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
          </el-collapse-item>
        </el-collapse>

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

<style scoped>
.paginate{
  margin-top: 20px;
  text-align: right;
}
</style>