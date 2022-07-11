
<template>
  <el-button type="success" size="mini" @click="showloginBox"
    >登录/注册</el-button
  >
  <div class="loginBox" @click="closeLoginBox" v-if="ifShow">
      <div class="main" @click.stop >
           <el-tabs v-model="activeName" >
                <el-tab-pane label="立即登录" name="first">
                    <el-form
                      :model="loginForm"
                      status-icon
                      ref="loginForm"
                      :rules="rules"
                      label-width="80px"
                      @keydown.enter="loginSubmit"
                    >   
                        <el-form-item label="用户名" prop="user">
                            <el-input v-model="loginForm.user"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="loginForm.pass"></el-input>
                        </el-form-item>
                        <el-form-item >
                            <el-button type="primary" @click="loginSubmit()">登录</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册账号" name="second">
                    <el-form
                      :model="regForm"
                      status-icon
                      ref="regForm"
                      :rules="rules"
                      label-width="80px"
                     @keydown.enter="regSubmit"
                    >   
                        <el-form-item label="用户名" prop="user">
                            <el-input v-model="regForm.user"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="regForm.pass"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="pass2">
                            <el-input type="password" v-model="regForm.pass2"></el-input>
                        </el-form-item>
                        <el-form-item >
                            <el-button type="primary" @click="regSubmit('regForm')">立即注册</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
      </div>
   
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      ifShow: false,
      activeName:'first',
      //登陆表单数据
      loginForm:{
          user:"",
          pass:""
      },
      //注册表单数据
      regForm:{
          user:"",
          pass:"",
          pass2:""
      },
      rules:{
          user:[
              {required:true,message:"请输入用户名"},
              {
                  validator(rule,value,cb){
                      //长度检验
                      if(value.length<2 || value.length>8){
                          cb(new Error("请输入2~8位的用户名"))
                      }
                      //规则验证
                      if(!/^[\w\u4e00-\u9fa5\u0800-\u4e00\uac00-\ud7ff]+$/.test(value)){
                          cb(new Error("只允许字母、数字、_、中/日/韩文"))
                      }
                      cb()
                  }
              }
          ],
          pass:[
              {required:true,message:"请输入密码"},
              {
                  validator(rule,value,cb){
                      //长度验证
                      if(value.length<6||value.length>18){
                          cb(new Error("请输入6~18位的密码"))
                      }
                      //规则验证
                      if(!/^[\w!\[\]{}\/\\:"|?>·`<@#$%^&*\(\)_+=~\-]+$/.test(value)){
                           cb(new Error("请输入合法的英文字符"))
                      }
                      cb()
                  }
              }
          ],
          pass2:[
              {required:true,message:"请确认密码"},
              {
                  validator:(rule,value,cb)=>{
                     if(this.regForm.pass !==value){
                         cb(new Error("两次输入密码不一致"))
                     }
                     cb()
                  }
              }
          ]
        }
    }
  },
  methods: {
    // 关闭 登录/注册 弹窗
    closeLoginBox(){
        this.ifShow = false
    },
    // 打开 登录/注册 弹窗
    showloginBox() {
      this.ifShow = true;
    },
    // 注册提交
    regSubmit(regForm){
        this.$refs[regForm].validate(async v=>{
            console.log(111);
            if(v){
               let {data} = await this.$axios({
                    method:"POST",
                    url:"/reg",
                    data:{
                        user:this.regForm.user,
                        pass:this.regForm.pass
                    }
                })
                //注册失败
                if(data.code){
                    this.$message.error(data.msg)
                    return
                }
                //注册成功
                this.$message.success("注册成功，即将为您切换到登录")
                //清空表单数据
                this.$refs.regForm.resetFields()
                //切换到登陆页面
                this.activeName = "first"
            }else{
                return false
            }
        })
    },
    // 登陆提交
    loginSubmit(){
        this.$refs['loginForm'].validate(async v=>{
             if(v){
                 //console.log(666);
                 let {data} = await this.$axios({
                     method:"POST",
                     url:"/login",
                     data:this.loginForm
                 })
                 console.log(data);
                 //登陆失败
                 if(data.code){
                   // console.log(1111);
                   this.$message.error(data.msg)
                   return
                 }
                 //登陆成功 
                 this.$message.success("登陆成功") //成功提示
                 this.$refs.loginForm.resetFields() // 清空表单数据
                 this.ifShow = false // 关闭弹窗
                 //存到vuex
                 this.loginSuccess(data.data)
             }else{
                 return false
             }
        })
    },
    //vuex
    ...mapMutations(['loginSuccess'])
  },
};
</script>

<style lang='less' scoped>
.loginBox {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .main{
      width: 300px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      padding: 10px 20px;
      transform: translate(-50%,-50%);
  }
}
</style>