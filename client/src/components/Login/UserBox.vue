
<template>
  <div class="UserBox">
    <el-popover
      placement="bottom-end"
      trigger="hover"
      :width="170"
    >
      <template #reference>
        <div
          class="img"
          :style="{
            backgroundImage: `url(${baseURL}${userInfo.photo}${random})`
          }"
          :title="userInfo.user"
        ></div>
      </template>
      <div class="show">
        <el-button type="primary" size="mini" @click="info">修改信息</el-button>
        <el-button type="danger" size="mini" @click="logout">退出登录</el-button>
      </div>
    </el-popover>

  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"

export default {
  name: "UserBox",
  data() {
    return {
      random:`?_=${Date.now()}`
    }
  },
  watch:{
    userInfo(){
      this.random = `?_=${Date.now()}`
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['loginOut']),
    //退出登录
    async logout(){
      //前端要清除vuex 后端清除session
      let {data} = await this.$axios({
        method:"POST",
        url:"/login/out"
      })
      if(data.code)return

      //退出成功
      //清空vuex
      this.loginOut()
      this.$message.success("已退出登录")
    },
    info(){
      this.$router.push("/user")
    }
  }
}
</script>

<style scoped lang="less">
.UserBox {
  width: 34px;
  height: 34px;
  /* padding: 8px 0; */
  /* margin-right: 100px ; */

  .img {
    width: 34px;
    height: 34px;
    background: none center center/cover;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
