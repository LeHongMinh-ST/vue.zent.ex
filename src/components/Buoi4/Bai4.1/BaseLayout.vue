<template>
  <el-container>
    <el-col :span="3">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span>Tổng quan</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-shop"></i>
          <span>Quản lý sản phẩm</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span>Quản lý hóa đơn</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-data"></i>
          <span>Quản lý hóa đơn</span>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Quản lý chi nhánh</span>
          </template>
          <el-menu-item-group title="Hoạt động">
            <el-menu-item index="5-1">Sản phẩm</el-menu-item>
            <el-menu-item index="5-2">Đơn hàng</el-menu-item>
            <el-menu-item index="5-3">Khách hàng</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Báo cáo">
            <el-menu-item index="5-4">Doanh thu</el-menu-item>
            <el-menu-item index="5-5">Tồn kho</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span>Cài đặt hệ thống</span>
        </el-menu-item>


      </el-menu>
    </el-col>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="header-title">
          <slot name="header-title"></slot>
        </div>
        <div class="header-info">
          <el-badge :value="12" class="item">
            <i class="el-icon-bell"></i>
          </el-badge>
          <el-dropdown>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
              <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
              <el-dropdown-item>Cấu hình</el-dropdown-item>
              <el-dropdown-item divided>Đăng xuất</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <slot name="main-content"></slot>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "BaseLayout"
}
</script>

<style scoped lang="scss">
.el-container {
  height: 100%;

  .el-col {
    .el-menu {
      height: 100%;
      text-align: left;
    }
  }

  .el-header {
    background-color: #F2F6FE;
    color: #333;
    line-height: 40px;
    justify-content: space-between;
    text-align: center;
    display: flex;

    .header-title{
      line-height: 30px;
    }
    .el-badge {
      margin-right: 35px;


      i {
        font-size: 20px;
      }
    }

    .el-dropdown {
      height: 40px;
      top: 10px;
      //margin-top: 10px;
      .el-avatar {

      }
    }
  }

  .el-aside {
    color: #333;
  }
}

</style>