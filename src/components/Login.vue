<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="60px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item label="账号" prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input type="text" v-model="ruleForm2.name" auto-complete="off" placeholder="姓名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <div style="text-align: center; margin-left: 20px">
      <el-button type="primary" style="width:35%;" @click.native.prevent="reset" :loading="logining">重置</el-button>
      <el-button type="primary" style="width:35%;" @click.native.prevent="login" :loading="logining">登录</el-button>
    </div>
  </el-form>
</template>

<script>

  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          name:"张三",
          checkPass: '123456'
        },
        rules2: {
          account: [
            {  message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          name: [
//                { required: true, message: '请输入名字', trigger: 'blur' },
                {  message: '请输入名字', trigger: 'blur' },
                //{ validator: validaePass }
          ],
          checkPass: [
            {  message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      reset: function () {
        this.ruleForm2.account = "";
        this.ruleForm2.name = "";
        this.ruleForm2.checkPass = "";
      },
      login: function () {
        sessionStorage.setItem('user', JSON.stringify(this.ruleForm2.name));
        this.$router.push({ path: '/home' });
      }
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 180px auto;
    border: 2px solid #8492A6;
    width: 450px;
    padding: 35px 35px 15px 35px;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
    font-weight: bold;
  }
</style>