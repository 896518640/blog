
<template>
  <div id="AppNav">
    <div class="content">
      <!-- logo -->
      <div class="logo">
        <a href="">EastWind</a>
      </div>
      <!-- 导航 -->
      <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/article">文章</router-link>
        <router-link to="/message">留言</router-link>
        <router-link to="/link">友链</router-link>
        <router-link to="/about">关于</router-link>
      </div>
      <!-- 登录按钮 -->
      <div class="login">
        <UserBox v-if="userInfo.user"></UserBox>
        <LoginBox v-else></LoginBox>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import LoginBox from './Login/LoginBox.vue'
import UserBox from './Login/UserBox.vue'
export default {
  components:{
    LoginBox,
    UserBox
  },
  computed:{
    ...mapState(['userInfo'])
  }
};
</script>

<style lang="less" scoped>
#AppNav {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(255,255,255,.3);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  .content {
    max-width: 1300px;
    min-width: 800px;
    justify-content: space-between;
    box-sizing: border-box;
    display: flex;
    padding: 0 15px;
    margin: 0 auto;
  }
  .logo {
    width: 130px;
    height: 50px;
    a {
      display: flex;
      width: 100%;
      height: 100%;
      line-height: 42px;
      font-size: 26px;
      letter-spacing: 5px;
      color: rgba(0, 0, 0, 0.5);
      font-family: "Pacifico",Sans-serif,serif;
    }
  }
  .nav {
      display: flex;
      height: 50px;
      a {
          display: block;
          height: 48px;
          border-bottom: 2px solid transparent;
          padding: 0 25px;
          color: #777;
          line-height:48px ;
          font-weight: bolder;
          transition: all .3s;
          
          /* 在里边写&相当于在外边写a */
          &:hover{
              color: #00b7ff;
          }
          &.router-link-active{
              color: #00b7ff;
              border-color: #00b7ff;
          }
      }
      /* a:hover{
          color: #00b7ff;
      } */
  }
  .login{
      padding: 11px 0;
  }
}
</style>