<template>
  <el-container>
    <el-col :span="3">
      <el-menu
          class="el-menu-vertical-demo"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
         <router-link to="/admin"><span>Tổng quan</span></router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-shop"></i>
          <router-link to="/admin/products"><span>Quản lý sản phẩm</span></router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <router-link to="/admin/bills"><span>Quản lý hóa đơn</span></router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-data"></i>
          <router-link to="/admin/statistics"><span>Báo cáo thống kê</span></router-link>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Quản lý chi nhánh</span>
          </template>
          <el-menu-item-group title="Hoạt động">
            <el-menu-item index="5-1"><router-link to="/admin/branches/products">Sản phẩm</router-link></el-menu-item>
            <el-menu-item index="5-2"><router-link to="/admin/branches/bills">Đơn hàng</router-link></el-menu-item>
            <el-menu-item index="5-3"><router-link to="/admin/branches/customers">Khách hàng</router-link></el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Báo cáo">
            <el-menu-item index="5-4"><router-link to="/admin/branches/revenue">Doanh thu</router-link></el-menu-item>
            <el-menu-item index="5-5"><router-link to="/admin/branches/inventory">Tồn kho</router-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
        <router-link to="/admin/settings"><span>Cài đặt hệ thống</span>
        </router-link>
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
              <el-dropdown-item divided><router-link class="logout" to="/logout">Đăng xuất</router-link></el-dropdown-item>
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
  name: "AdminLayout",
}
</script>

<style scoped lang="scss">

.logout{
  //color: rgb(255 255 255);
  text-decoration: none !important;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.logout:visited{
  //color: rgb(255 255 255);
}
.el-container {
  height: 100%;

  .el-col {
    .el-menu {
      height: 100%;
      text-align: left;

      a{
        color: rgb(255 255 255);
        text-decoration: none !important;
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      a:visited{
        color: rgb(255 255 255);
      }
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