
<template>
  <div id="Article" v-infinite-scroll="load">
    <article class="fadeIn" v-for="item in articleData" :key="item._id">
      <h2>{{ item.title }}</h2>
      <div class="time">
        <p class="date">{{ new Date(item.date).getDate() }}</p>
        <p class="m-y">
          <span>{{ new Date(item.date).getMonth() + 1 }}</span>
          <span>{{ new Date(item.date).getFullYear() }}</span>
        </p>
      </div>
      <div class="show">
        <div
          class="img"
          :style="{ backgroundImage: `url(${baseURL}${item.cover})` }"
        ></div>
        <div class="des">{{ item.des }}</div>
      </div>
      <div class="r-b">
        <p>浏览量：{{ item.pv }}</p>
        <router-link :to="`/article/${item._id}`">阅读全文</router-link>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      articleData: [],
      skip: 0,
      AllArticleData: [],
    };
  },
  methods: {
    async getArticles() {
      let { data } = await this.$axios({
        method: "get",
        url: "/get/article",
        params: { skip: this.skip },
      });
      console.log(data);
      if (data.code) {
        return this.$message.error(data.msg);
      }
      this.AllArticleData = data.data;
      console.log(this.AllArticleData);
      this.articleData.push(...this.AllArticleData.slice(this.skip, this.skip + 5));
    },
    load() {
      if (!this.AllArticleData.length)return
      console.log(666);
        this.skip += 5;
        this.articleData.push(...this.AllArticleData.slice(this.skip, this.skip + 5));
      
    },
  },
  created() {
    this.getArticles();
  },
};
</script>

<style lang="less" scoped>
#Article {
  article {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #ddd;
    padding: 25px 20px;
    background-color: #fff;
    font-family: Quicksand, "微软雅黑";
    background-color:rgba(255,255,255,.8) ;
    box-shadow: 10px 10px 10px -10px rgba(0,0,0,.5);
    h2 {
      margin-bottom: 15px;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 24px;
      border-left: 5px solid #73b899;
      text-indent: 10px;
    }
    .time {
      position: absolute;
      top: 0;
      right: 10px;
      width: 60px;
      .date {
        font-weight: bolder;
        font-size: 40px;
        text-align: center;
        color: #6bc30d;
      }
      .m-y {
        display: flex;
        justify-content: space-between;
      }
    }
    .show {
      display: flex;
      width: 100%;
      height: 250px;
      .img {
        box-sizing: border-box;
        width: 50%;
        padding-right: 1%;
        background-size: cover;
        background-position: 50%;
      }
      .des {
        box-sizing: border-box;
        width: 50%;
        padding-left: 1%;
      }
    }
    .r-b {
      position: absolute;
      right: 20px;
      bottom: 20px;
      p {
        position: relative;
        top: -10px;
        color: #aaa;
        font-size: 12px;
      }
      a {
        padding: 10px 20px;
        background-color: #409eff;
        color: #fff;
        transition: opacity 0.3s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    &.fadeIn{
      animation: fadeIn 1s 1;
      animation-fill-mode: backwards;
    }
    @keyframes fadeIn {
      from{
        opacity: 0;
        transform: scale(.5);
      }
      to{
        opacity: 1;
        transform: scale(1);
      }
    }
  }
}
</style>