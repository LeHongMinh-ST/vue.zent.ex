<template>
  <el-col :span="12" class="main-content">
    <el-row class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>Trang chủ</el-breadcrumb-item>
        <el-breadcrumb-item>Công nghệ</el-breadcrumb-item>
        <el-breadcrumb-item>Intel sẽ có bộ xử lý tốt hơn bộ xử lý của Apple - CEO mới của Intel cho biết
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div class="thumnail">
        <img src="https://voz.vn/attachments/1610907178368-png.372204/"
             alt="">
      </div>

      <div class="content">
        <p>
          Intel đã vừa chính thức thông báo rằng giám đốc điều hành của họ - Bob Swan sẽ rời công ty vào tháng hai năm
          nay. Ông sẽ được thay thế bởi nhân viên lâu năm của Intel và là cựu CTO - Pat Gelsinger. Mặc dù Gelsinger vẫn
          chưa nhậm chức nhưng ông đã chuẩn bị sẵn sàng. Theo các báo cáo, mục tiêu đầu tiên của Gelsinger là Apple. Ông
          ấy muốn đảm bảo rằng Intel sẽ sản xuất những bộ xử lý tốt hơn bộ xử lý PC của Apple.
        </p>
      </div>
    </el-row>
  </el-col>
</template>

<script>
export default {
  name: "CongNghe"
}
</script>

<style scoped lang="scss">
.main-content {
  text-align: center;
  padding: 20px;

  .thumnail {
    margin-top: 30px;

    img {
      border-radius: 10px;
      width: 100%;
    }
  }

  .content {
    text-align: left;
  }

}
</style>