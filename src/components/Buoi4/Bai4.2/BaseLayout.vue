<template>
  <el-container>
    <el-header>
      <slot name="banner"></slot>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Trang chủ</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Thể thao</template>
          <el-menu-item index="2-1">Bóng đá châu âu</el-menu-item>
          <el-menu-item index="2-2">Bóng đá trong nước</el-menu-item>
          <el-menu-item index="2-3">Võ thuật</el-menu-item>
          <el-menu-item index="2-4">Các môn thể thao khác</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">Sức khỏe</template>
          <el-menu-item index="3-1">Kiến thức giới tính</el-menu-item>
          <el-menu-item index="3-2">Làm đẹp</el-menu-item>
          <el-menu-item index="3-3">Đại dịch covid</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">Pháp luật</el-menu-item>
        <el-menu-item index="5">Dịch vụ</el-menu-item>
        <el-menu-item index="6">Giáo dục</el-menu-item>
        <el-menu-item index="7">Văn hóa</el-menu-item>
        <el-menu-item index="8">Công nghệ</el-menu-item>
        <el-menu-item index="9">Giải trí</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <el-row>
        <slot name="left-ads"></slot>
        <slot name="main-content"></slot>
        <slot name="right-ads"></slot>
      </el-row>
    </el-main>

  </el-container>
</template>

<script>
export default {
  name: "BaseLayout",
  data() {
    return {
      activeIndex: '8',
    };
  }
}
</script>

<style scoped lang="scss">
.el-container {
  width: 65%;
  margin: 0 auto;

  .el-header {
    height: 100% !important;
    padding: 0;

    .el-menu{

    }
  }

  .el-main {
    height: 900px;
    overflow: hidden;
    padding: 0;
  }
}
</style>