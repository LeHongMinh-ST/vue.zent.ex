<template>
  <AdminLayout>
    <template v-slot:header-title>
      <h2>Cài đặt</h2>
    </template>
    <template v-slot:main-content>

      <div class="block">
        <div class="radio">
          Order:
          <el-radio-group v-model="reverse">
            <el-radio :label="true">descending</el-radio>
            <el-radio :label="false">ascending</el-radio>
          </el-radio-group>
        </div>

        <el-timeline :reverse="reverse">
          <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
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
      reverse: true,
      activities: [{
        content: 'Event start',
        timestamp: '2018-04-15'
      }, {
        content: 'Approved',
        timestamp: '2018-04-13'
      }, {
        content: 'Success',
        timestamp: '2018-04-11'
      }]
    };
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