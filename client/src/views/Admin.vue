
<template>
  <div id="Admin">
    <article>
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane label="发表文章" name="first">
          <ArticleAdd />
        </el-tab-pane>
        <el-tab-pane label="文章管理" name="second">
          <ArticleManger />
        </el-tab-pane>
        <el-tab-pane label="添加友链" name="third">
          <LinkAdd></LinkAdd>
        </el-tab-pane>
        <el-tab-pane label="友链管理" name="fourth">
          <LinkManager></LinkManager>
        </el-tab-pane>
        <el-tab-pane label="反馈收集" name="fifth">
          <ContactMsg></ContactMsg>
        </el-tab-pane>
      </el-tabs>
    </article>
  </div>
</template>

<script>
import LinkAdd from "../components/Admin/LinkAdd.vue";
import LinkManager from "../components/Admin/LinkManager.vue";
import ArticleAdd from "../components/Admin/ArticleAdd.vue";
import ArticleManger from "../components/Admin/ArticleManger.vue";
import ContactMsg from "../components/Admin/ContactMsg.vue";
import { mapState } from "vuex";
export default {
  name: "Admin",
  data() {
    return {
      activeName: "fifth",
    };
  },
  components: {
    LinkAdd,
    LinkManager,
    ArticleAdd,
    ArticleManger,
    ContactMsg,
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  watch: {
    userInfo() {
      this.check();
    },
  },
  methods: {
    async check() {
      //像后端发送请求 验证管理员权限
      let { data } = await this.$axios({
        method: "POST",
        url: "/adminServer/check",
      });
      console.log(data);
      if (data.code) {
        this.$router.replace("/");
        this.$message.error("请以管理员账号登录");
        /*  this.$router.go(-1); */
      }
    },
  },
  created() {
    this.check();
  },
};
</script>

<style lang="less" scoped>
#Admin {
  article {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #ddd;
    padding: 25px 20px;
    background-color: #fff;
    min-height: 721px;
    font-family: Quicksand, Microsoft YaHei, sans-serif;
    h2 {
      margin-bottom: 15px;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 24px;
      border-left: 5px solid #73b899;
      text-indent: 10px;
    }
  }
}
</style>