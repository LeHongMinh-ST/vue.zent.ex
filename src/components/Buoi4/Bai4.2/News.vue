<template>
  <BaseLayout>
    <template #banner>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(banner,item) in banners" :key="item">
          <div :style="{backgroundImage: 'url(' + banner + ')' }"></div>
        </el-carousel-item>
      </el-carousel>
    </template>

    <template #left-ads>
      <el-col :span="6">
        <img :src="ads1" alt="">
      </el-col>
    </template>

    <template #main-content>
      <router-view/>
    </template>

    <template #right-ads>
      <el-col :span="6">
        <img :src="ads2" alt="">
      </el-col>

    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/Buoi4/Bai4.2/BaseLayout";

export default {
  name: "News",
  components: {
    BaseLayout
  },
  data() {
    return {
      ads1: 'https://s0.2mdn.net/6626453/12222020-205306908-06022020-034553851-300x600_resize.jpg',
      ads2: 'https://s0.2mdn.net/simgad/5778156143920512579',
      banners: [
        'https://cdn-img-v2.webbnc.net//uploadv2/web/87/8762/menu/2017/12/17/02/07/1513519251_2.png',
        'https://www.elle.vn/wp-content/uploads/2020/03/21/394701/dai-duong-ca-bien-1.jpg',
        'https://cdn.baogiaothong.vn/upload/images/2019-2/article_img/2019-05-28/dai-duong-2-1559047713-width1600height1067.jpg',
      ]
    }
  }
}
</script>

<style scoped lang="scss">


.el-carousel {
  .el-carousel__item {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    div{
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
    }
  }
}

.main-content {
  text-align: center;
  padding: 20px;

  .thumnail {
    margin-top: 30px;

    img {
      border-radius: 10px;
    }
  }

  .content {
    text-align: left;
  }

}

img {
  width: 100%;
}

</style>