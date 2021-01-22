<template>
  <el-col :span="12" class="main-content">
    <el-row class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>Trang chủ</el-breadcrumb-item>
        <el-breadcrumb-item>Giáo dục</el-breadcrumb-item>
        <el-breadcrumb-item>Trên tay Samsung Galaxy Giáo dục</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="thumnail">
        <img src="https://photo2.tinhte.vn/data/attachment-files/2021/01/5305182_tren_tay_bud_pro_tinhte-7.jpg"
             alt="">
      </div>

      <div class="content">
        <p>
          Galaxy Buds Pro là một chiếc tai nghe đặc biệt và thú vị của Samsung. Nó là sản phẩm nối tiếp với chiếc
          Galayx Buds ra mắt trước đó nhưng được trang bị nhiều tính năng hơn, nhiều công nghệ hơn và mục đích là
          làm sao nâng cao trải nghiệm của người dùng.
        </p>
      </div>
    </el-row>
  </el-col>
</template>

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