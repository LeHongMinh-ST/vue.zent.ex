<template>
  <div class="hello">
    <input type="file" accpet="image/*" @input="onChangeImage">
    <button @click="uploadImage">Upload</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  data() {
    return {
      imageUrl: '',
      image:'',
    };
  },
  methods:{
    onChangeImage(e) {
      if(e.target.files.length){
        this.image = e.target.files[0]
      }
    },
    uploadImage(){
      const formData = new FormData();
      formData.append('name','Minh')
      formData.append('price','1')
      formData.append('image',this.image)

      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        data: formData
      }).then((response) => {
        if (response.status === 200) {
          this.$message({
            message: 'Tạo mới thành công',
            type: 'success'
          });
          this.getList()
          this.dialogFormCreate = false;
        }
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
