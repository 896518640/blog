<template>
  <!-- 头部导航 -->
  <AppNav />
  <!-- 内容部分 -->
  <div id="main">
    <!-- 左侧边栏 -->
    <div class="m-left">
      <AppSide></AppSide>
    </div>
    <!-- 路由页面 -->
    <div class="m-right">
      <router-view></router-view>
    </div>
  </div>
  <footer>
    <div id="copyright">
      <ul class="links" font-style="”normal”;">
        <li>© 2021~2022 东风的书屋</li>
        <li>皖 ICP 备 2022003165 号</li>
        <li>Ver 1.1.0</li>
        <li>202200311</li>
      </ul>
    </div>
  </footer>
</template>
<script>
import AppNav from "./components/AppNav.vue";
import AppSide from "./components/AppSide.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    AppNav,
    AppSide,
  },
  methods: {
    ...mapMutations(["loginSuccess"]),
  },
  async created() {
    let { data } = await this.$axios({
      method: "POST",
      url: "/login/check",
    });
    console.log(data);
    //未登录
    if (data.code) return;
    //已登陆
    this.loginSuccess(data.data);
  },
};
</script>
<style lang="less" >
@import "assets/css/reset.css";
@import "assets/css/font.css";
@import "assets/css/font/iconfont.css";
::-webkit-scrollbar {
  width: 5px;
  height: 0;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 167, 232, 0.3);
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
body {
  background-color: #f2f2f2;
  background: url("assets/img/bg/bg-left.png") no-repeat 0 50px fixed,
    url("assets/img/bg/bg-right.png") no-repeat right 50px fixed;
  background: url("assets/img/bg/bg_3.png") no-repeat fixed;
}
#main {
  width: 100%;
  max-width: 1300px;
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  margin: 65px auto 0;
  .m-left {
    width: 270px;
    /* height: 500px; */
    /* background-color: pink; */
    margin-right: 15px;
  }
  .m-right {
    flex: 1;
    /* height: 400px; */
    /* background: #00b7ff; */
  }
}
footer {
  width: 100%;
  height: 50px;
  position: relative;
  color: rgb(133, 132, 132);
  margin-top: 50px;
  text-align: center;
  #copyright ul.links {
    display: inline-block;
    font-weight: 700;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    margin: 0px auto;
    padding: 0.85em 2.25em;
    background-color:rgba(255,255,255,.8) ;
    box-shadow: 10px 10px 10px -10px rgba(0,0,0,.5);
  }
  ul.links li {
    display: inline-block;
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    padding: 0px 0px 0px 1em;
    margin: 0px 0px 0px 1em;
  }
   ul.links li:first-child {
    padding-left: 0px;
    margin-left: 0px;
    border-left: 0px;
  }
}
</style>
