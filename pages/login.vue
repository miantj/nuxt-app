<template>
  <div class="login_page">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item class="manage_tip">
            <p>
              后台管理系统
            </p>
          </el-form-item>
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              maxlength="10"
              placeholder="用户名"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              v-model="loginForm.password"
              maxlength="30"
              show-password
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('loginForm')"
              class="submit_btn"
            >
              登 录
            </el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script> 
import { mapMutations } from 'vuex'
// import { login } from '../api/getData'
// import md5 from 'js-md5'
// import { setLocalStore } from '@/plugins/mUtils'

export default {
  head () {
    return {
      title: '登录页'
    }
  },
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },
      showLogin: false,
    }
  },
  mounted () {
    this.showLogin = true;

  },
  computed: {

  },
  methods: {
    ...mapMutations([
      'USER'
    ]),
    async submitForm (formName) {

      this.$refs[formName].validate(async (valid) => {

        if (valid) {
          // const res = await login({ "account": this.loginForm.username, "password": md5(this.loginForm.password) })
          this.USER(this.loginForm.username)
          // if (res) {
          this.$message({
            type: 'success',
            message: '登录成功'
          });
          //   // 成功更新token
          //   setLocalStore('token', res.data.token)
          //   // 成功更新权限
          //   const obj = {};
          //   for (let item of res.data.permission) {
          //     obj[item.model] = item.data;
          //   }
          //   setLocalStore('permission', obj)
          //   // 成功保存用户名
          //   setLocalStore('username', this.loginForm.username)
          this.$router.push('layout')
          // }
        } else {
          this.$notify.error({
            title: '错误',
            message: '请输入正确的用户名密码',
            offset: 100
          });
          return false;
        }
      });
    },
  },
  watch: {

  }
}
</script>

<style lang="less" scoped>
@import "../assets/style/mixin";
.login_page {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #324057;
}
.manage_tip {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  p {
    font-size: 34px;
    color: #fff;
  }
}
.form_contianer {
  .wh(370px, 220px);
  .ctp(370px, 220px);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  .submit_btn {
    width: 100%;
    font-size: 16px;
  }
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>
