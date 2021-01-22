<template>
  <LoginLayout>
    <template #login>
      <main class="MuiContainer-root wrap MuiContainer-maxWidthXs">
        <div class="logoWrap"><img class="logo"
                                   src="http://dev-fms.zentsoft.com//static/media/logo-login.2d516aef.png"
                                   alt=""></div>
        <div class="formInputWrap">
          <div class="sui-input-wrap">
            <div class="sui-input-prefix"></div>
            <input class="sui-input formInput" :class="{error: errorEmail.length > 0 && email.length == 0}" type="text" placeholder="Email" value="" v-model="email">
            <div class="sui-input-subfix"></div>
          </div>
          <div class="sui-error-message" v-if="errorEmail.length > 0 && email.length == 0">
            <i class="el-icon-warning MuiSvgIcon-root sui-error-message-icon"></i>
            <span>{{errorEmail}}</span>
          </div>
        </div>
        <div class="formInputWrap">
          <div class="sui-input-wrap">
            <div class="sui-input-prefix"></div>
            <input class="sui-input formInput" :class="{error: errorPassword.length > 0 && password.length == 0}" type="password" placeholder="Mật khẩu" value="" v-model="password">
            <div class="sui-input-subfix"></div>
          </div>
          <div class="sui-error-message" v-if="errorPassword.length > 0 && password.length == 0">
            <i class="el-icon-warning MuiSvgIcon-root sui-error-message-icon"></i>

            <span>{{ errorPassword }}</span></div>
          <div class="forgotPwdWrap">
            <button class="MuiButtonBase-root MuiButton-root MuiButton-text textButton forgotPwdBtn"
                    tabindex="0" type="button" @click="forgotBtn()"><span class="MuiButton-label">Quên mật khẩu?</span><span
                class="MuiTouchRipple-root"></span></button>
          </div>
        </div>
        <button class="MuiButtonBase-root MuiButton-root MuiButton-text mainButton submitButton"
                tabindex="0" type="button" @click="onSubmit()"><span class="MuiButton-label">ĐĂNG NHẬP</span><span
            class="MuiTouchRipple-root"></span></button>
      </main>
    </template>
  </LoginLayout>
</template>

<script>
import LoginLayout from "@/layouts/LoginLayout";

export default {
  name: "Login",
  components: {
    LoginLayout
  },
  data() {
    return {
      email: "",
      password: "",
      errorEmail: "",
      errorPassword: "",
    }
  },
  methods: {
    onSubmit() {
      let validate = true;

      if (this.email.length == 0) {
        this.errorEmail = "Email không được để trống";
        validate = false;
      }

      if (this.password.length == 0) {
        this.errorPassword= "Mật khẩu không được để trống";
        validate = false
      }

      if (validate) {
        this.$router.push('/admin');
      }
    },
    forgotBtn(){
      this.$router.push('/forgot-password')
    }
  }
}
</script>

<style scoped lang="scss">

.MuiContainer-root {
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}

.wrap {
  background: #ffffff;
  padding: 24px;
  border-radius: 10px;

  .logoWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;

    .logo {
      width: 200px;
    }
  }

  .formInputWrap {
    margin-bottom: 24px;


    .formInput {
      border-radius: 4px;
      height: 50px;
    }

    .error{
      border-color:#ee4f5e !important;
    }

    .sui-error-message {
      display: flex;
      align-items: center;
      color: #ee4f5e;
      margin-top: 8px;
      font-size: 12px;

      .sui-error-message-icon {
        color: #ee4f5e;
        font-size: 12px;
        margin-right: 4px;
        height: 12px;
      }
    }


    .sui-input-wrap {
      position: relative;
      height: 50px;
      //width: 100%;

      .sui-input {
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        //height: 100%;
        padding: 12px;
        font-size: 14px;
        line-height: 18px;
        color: #253036;
        border-radius: 4px;
        height: 50px;
        border: 1px solid #d8e0ea;
        outline: unset;

        &:hover,
        &:active,
        &:focus {
          border: 1px solid #0080dd;
        }

        &.has-error {
          border: 1px solid #f54b5e;
        }

        &.read-only {
          background: #0093e9;
        }
      }

      .sui-input-prefix {
        position: absolute;
        top: 0;
        left: 12px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .sui-input-subfix {
        position: absolute;
        top: 0;
        right: 12px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &.sui-input-has-prefix {
        .sui-input {
          padding-left: 40px;
        }
      }

      &.sui-input-has-subfix {
        .sui-input {
          padding-right: 40px;
        }
      }

      .sui-input-clear {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 12px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        //.sui-input-clear-icon {
        //  color: $colorSecond;
        //}
      }
    }

  }

  .forgotPwdTitle {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
  }

  .forgotPwdDescription {
    font-size: 14px;
    color: #54657a;
    margin-bottom: 8px;
  }

  .forgotPwdWrap {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .forgotPwdBtn {
      color: #0080dd;
      line-height: 18px;
      background: transparent;
      border-radius: 4px;
      text-transform: none;
      border: none;

      background: none;
      outline: none;
      cursor: pointer;
      font-size: 15px;
      padding: 6px 8px;
    }

    .forgotPwdBtn:hover {
      background: #F5F5F5;
    }
  }

  .returnLoginWrap {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 24px;

    .returnLoginBtn {
      color: #0080dd;
    }
  }

  .submitButton {
    width: 100%;
    height: 50px;
    background-color: #0080dd;
    color: white;
    outline: none;
    border-radius: 4px;
    border: none;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
  }

  .loadingIcon {
    color: #ffffff !important;
    margin-right: 8px;
    width: 20px !important;
    height: 20px !important;
  }
}


@media (min-width: 600px) {
  .MuiContainer-root {
    padding-left: 24px;
    padding-right: 24px;
  }
}

.MuiContainer-disableGutters {
  padding-left: 0;
  padding-right: 0;
}

@media (min-width: 600px) {
  .MuiContainer-fixed {
    max-width: 600px;
  }
}

@media (min-width: 960px) {
  .MuiContainer-fixed {
    max-width: 960px;
  }
}

@media (min-width: 1280px) {
  .MuiContainer-fixed {
    max-width: 1280px;
  }
}

@media (min-width: 1920px) {
  .MuiContainer-fixed {
    max-width: 1920px;
  }
}

@media (min-width: 0px) {
  .MuiContainer-maxWidthXs {
    max-width: 444px;
  }
}

@media (min-width: 600px) {
  .MuiContainer-maxWidthSm {
    max-width: 600px;
  }
}

@media (min-width: 960px) {
  .MuiContainer-maxWidthMd {
    max-width: 960px;
  }
}

@media (min-width: 1280px) {
  .MuiContainer-maxWidthLg {
    max-width: 1280px;
  }
}

@media (min-width: 1920px) {
  .MuiContainer-maxWidthXl {
    max-width: 1920px;
  }
}

</style>