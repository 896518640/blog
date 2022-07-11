<template>
  <div id="About">
    <article>
      <h2>ABOUT ME</h2>
      <p>我老爱前端了，我将代码视为我的亲儿子🤞</p>
      <p>一名努力的刘同学😎</p>
      <p>希望大家多提建议！</p>
    </article>
    <article>
      <h2>ABOUT SITE</h2>
      <p class="code"><code>前&nbsp 端：</code><span>Vue +  Element</span></p>
      <p class="code"><code>后&nbsp 端：</code><span>Node + Nuxt + Express + Mongodb</span></p>
      <p class="border"><code>服务器：</code><a href="https://www.aliyun.com/" target="_blank">阿里云ECS</a></p>
      <p>
        这个博客是我在2021年10月份开始构思的，到现在已经有几个月了，我一直想有一个自己的技术博客！
        今天2021.12-22日他终于上线啦！
      </p>
    </article>
    <article>
      <h2>ABOUT COPYRIGHT</h2>
      <p>源码开源: <a href="https://github.com/896518640" target="_blank">东东的github</a></p>
      <p>在注明出处的前提下，本站允许非商业用途的转载</p>
    </article>
    <article>
      <h2>OTHER</h2>
      <p>我目前是一名大三的在校学生，专业是通信工程，热爱前端，接触前端已经有一年之久啦！如果有问题要探讨，可以
        <a href="/#contact">contact me</a>联系我，或者可以在👈左侧边栏找到我的📞联系方式哦
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="less" scoped>
article {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 0 0 4px #ddd;
  padding: 25px 20px;
  background-color: #fff;
  background-color:rgba(255,255,255,.8) ;
  box-shadow: 10px 10px 10px -10px rgba(0,0,0,.5);
  font-family: Quicksand, Microsoft YaHei, sans-serif;

  h2 {
    margin-bottom: 15px;
    font-size: 20px;
    letter-spacing: 3px;
    line-height: 24px;
    border-left: 5px solid #73b899;
    text-indent: 10px;
  }

  p {
    text-indent: 2em;
    color: #444;
    font-size: 14px;
    letter-spacing: 4px;
    line-height: 30px;

    code {
      font-family: Quicksand, Microsoft YaHei, sans-serif;
    }

    a {
      color: #409eff;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p.code span {
    font-weight: 700;
    color: #bd4147;
    background: rgba(27, 31, 35, .05);
  }

  p.border {
    border-bottom: 1px dotted rgb(170, 170, 170);
  }
}
</style>