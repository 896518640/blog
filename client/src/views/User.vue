
<template>
  <div id="User">
    <article>
      <h2>修改用户名</h2>
      <UpdateName/>
    </article>
    <article>
      <h2>修改密码</h2>
      <UpdatePass/>
    </article>
    <article>
      <h2>上传头像</h2>
      <UpdatePhoto/>
    </article>
  </div>
</template>

<script>
import UpdateName from '@/components/User/UpdateName'
import UpdatePass from '@/components/User/UpdatePass'
import UpdatePhoto from '@/components/User/UpdatePhoto'
import {mapState} from 'vuex'
export default {
    components:{
        UpdateName,
        UpdatePass,
        UpdatePhoto  
    },
    computed:{
        ...mapState(['userInfo'])
    },
    watch:{
        userInfo(){
            this.backHome()
        }
    }, 
    methods:{
        //未登录情况下，返回首页
        backHome(){
            if(!this.userInfo.user){
                this.$message.error("当前未登录，无法修改个人信息,已自动返回首页")
                this.$router.replace("/")
            }
        }
    },
    beforeRouteEnter(to,from,next){
        //前置导航没有this 获取组件实例可通过next参数
       next(vm=>{
           vm.backHome()
       })
    },
};
</script>

<style lang="less" scoped>
article {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 0 0 4px #ddd;
  padding: 25px 20px;
  background-color: #fff;
  font-family: Quicksand, Microsoft YaHei, sans-serif;
  background-color:rgba(255,255,255,.9) ;
  box-shadow: 10px 10px 10px -10px rgba(0,0,0,.5);
  h2 {
    margin-bottom: 15px;
    font-size: 20px;
    letter-spacing: 3px;
    line-height: 24px;
    border-left: 5px solid #73b899;
    text-indent: 10px;
  }
}
</style>