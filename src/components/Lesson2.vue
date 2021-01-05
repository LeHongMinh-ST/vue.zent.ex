<template>
  <div class="container">
    <div class="loginWrap">
      <div class="inputWrap">
        <div class="inputLabel">Họ và tên</div>
        <input type="text" ref="name"/>
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Ngày sinh</div>
        <input type="text" ref="birthDay"/>
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Số điện thoại</div>
        <input type="text" ref="phone"/>
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Link Facebook</div>
        <input type="text" ref="facebook"/>
      </div>
      <div class="buttonWarp">
        <button class="saveButton" @click="save()">Save</button>
        <button class="clearButton" @click="clear()">Clear</button>
      </div>
    </div>
    <div class="infoWrap">
      <div class="infoLabel">
        Họ tên: {{ name }}
      </div>
      <div class="infoLabel">
        Ngày sinh: {{ birthday }}
      </div>
      <div class="infoLabel">
        Số điện thoại: {{ phone }}
      </div>
      <div class="infoLabel">
        Link Facebook: <a :href="facebook">{{ facebook }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lesson2",
  data() {
    return {
      name: "",
      birthday: "",
      phone: "",
      facebook: "",
    };
  },
  methods: {
    save: function () {
      this.name       = this.$refs.name.value;
      this.birthday   = this.$refs.birthDay.value;
      this.phone      = this.$refs.phone.value;
      this.facebook   = this.$refs.facebook.value;
    },
    clear: function () {
      this.name       = this.$refs.name.value = null;
      this.birthday   = this.$refs.birthDay.value = null;
      this.phone      = this.$refs.phone.value = null;
      this.facebook   = this.$refs.facebook.value = null;
    }
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  .loginWrap {
    background: #f5f5f5;
    border: 1px solid #6e6e6e;
    padding: 24px;
    width: 300px;
    height: 400px;

    .inputWrap {
      margin-bottom: 12px;

      .inputLabel {
        font-weight: bold;
        margin-bottom: 8px;
        text-align: left;
      }

      input {
        width: 292px;
        height: 30px;
      }
    }
    .buttonWarp {
      display: flex;

      button {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        margin: 20px 10px;
        color: #fff;
        border: unset;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
      }

      button.saveButton {
        background: #0080dd;
      }
      button.clearButton {
        background: #dd1a00;
      }
    }
  }

  .infoWrap {
    line-height: 40px;
    background: #fff;
    border: 1px solid #6e6e6e;
    padding: 24px;
    height: 400px;
    width: 400px;
    margin-left: 24px;
    text-align: left;

    .infoLabel {
      font-weight: bold;
      color: #00aaaa;
    }
  }
}
</style>