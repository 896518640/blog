<template>
  <div id="Appside">
      <!-- 个人信息 -->
      <Personal></Personal>
    <div class="sticky"
        :class="{'fixed':ifFiexd}"
    >
      <!-- 热门文章 -->
      <HotArticle/>

      <!-- 最近访客 -->
      <Visitor/>
    </div>

  </div>
</template>

<script>
import Personal from "../components/AppSide/Personal.vue"
import HotArticle from "../components/AppSide/HotArticle.vue"
import Visitor from "../components/AppSide/Visitor.vue"
export default {
    data(){
        return {
            ifFiexd:false
        }
    },
    components:{
        Personal,HotArticle,Visitor
    },
    methods:{
        scrollFn(){
            //获取滚动高
            let scrollTop  = document.documentElement.scrollTop ;
            this.ifFiexd = scrollTop >=235
        }
    },
    mounted(){
        this.scrollFn();
        window.addEventListener("scroll",()=>{
            this.scrollFn();
        })
    }
}
</script>

<style lang="less" scoped>
#Appside{
    width: 270px;
    .sticky.fixed{
        position: fixed;
        width: 270px;
        top: 65px;
        //所有加了定位属性的元素初始的left都是auto
    }
}
</style>