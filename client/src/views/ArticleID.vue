
<template>
  <div id="ArticleID">
    <article>
      <main id="mdToHTML"></main>
    </article>
  </div>
</template>

<script>
export default {
  async mounted() {
    let id = this.$route.params.id;
    let { data } = await this.$axios({
      method: "GET",
      url: "/get/articleID",
      params: {
        id,
      },
    });
    if (data.code) {
      return this.$message({
        type: "error",
        message: data.msg,
        duration: 1000,
        onClose: () => {
          this.$router.replace("/article");
        },
      });
    }
    let res = await this.$axios({
      method: "GET",
      url: `${data.data.md}`,
    });
    console.log(res);
    editormd.markdownToHTML("mdToHTML", {
      markdown: res.data,
      emoji: true,
    });
  },
};
</script>

<style lang="less" scoped>
#ArticleID {
  #mdToHTML {
    box-sizing: border-box;
  }
}
</style>