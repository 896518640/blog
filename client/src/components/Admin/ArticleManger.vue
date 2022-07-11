
<template>
  <div id="ArticleManger">
    <el-input
      v-model="searchTxt"
      class="w-50 m-2 search"
      placeholder="请输入搜索内容"
      :prefix-icon="search"
      @input="handleSearch"
    />
    <el-table :data="articleData" style="width: 100%">
      <el-table-column label="标题">
        <template #default="scope">
          <el-input v-model="scope.row.title"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="描述">
        <template #default="scope">
          <el-input v-model="scope.row.des"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="文章重传">
        <template #default="scope">
          <el-upload
            class="upload-demo"
            :with-credentials="true"
            :limit="1"
            :on-success="
              function (res) {
                md_upload_success(res, scope.row._id);
              }
            "
            action="http://localhost:4000/adminServer/article/md"
            :before-upload="md_before_upload"
            :show-file-list="false"
          >
            <el-button type="primary" plain>点我上传</el-button>
          </el-upload>
        </template>
      </el-table-column>
      <el-table-column label="封面修改">
        <template #default="scope">
          <div class="demo-image__preview">
            <div class="cover">
              <el-image
                style="width: 50px; height: 50px"
                :src="`${baseURL}${scope.row.cover}`"
                :preview-src-list="[`${baseURL}${scope.row.cover}`]"
              >
              </el-image>
              <el-upload
                class="upload-demo"
                :with-credentials="true"
                :limit="1"
                :on-success="
                  function (res) {
                    cover_upload_success(res, scope.row._id);
                  }
                "
                action="http://localhost:4000/adminServer/article/cover"
                :before-upload="cover_before_upload"
                :show-file-list="false"
              >
                <el-button type="info" plain>点我上传</el-button>
              </el-upload>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button
            type="success"
            plain
            size="small"
            @click="
              update(scope.row._id, {
                title: scope.row.title,
                des: scope.row.des,
              })
            "
            >修改</el-button
          >
          <el-button
            type="danger"
            plain
            size="small"
            @click="deleteArtitle(scope.row._id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ArticleManger",
  data() {
    return {
      articleData: [],
      AllarticleData: [],
      searchTxt: "",
      timer: null,
    };
  },
  methods: {
    //搜索
    handleSearch() {
      /* 防抖 为了避免函数重复执行 */
      clearTimeout(this.timer)
      this.timer=setTimeout(() => {
        let txt = this.searchTxt.trim();
        if (!txt) {
          return (this.articleData = this.AllarticleData);
        }
        let arr = [];
        this.AllarticleData.forEach((item) => {
          //通过title 和 des 进行筛选
          if (item.title.includes(txt) || item.des.includes(txt)) {
            arr.push(item);
          }
        });
        this.articleData = arr;
      }, 500);
    },
    //请求所有文章数据
    async getArticles() {
      let { data } = await this.$axios({
        method: "get",
        url: "/get/article",
        params: { skip: this.skip },
      });
      if (data.code) {
        return this.$message.error(data.msg);
      }
      this.AllarticleData = data.data;
      this.handleSearch();
    },
    //请求md  cover 所有数据
    async update(id, doc) {
      let { data } = await this.$axios({
        method: "POST",
        url: "/adminServer/article/update",
        data: {
          id,
          doc,
        },
      });
      if (data.code) {
        return this.$message.error(data.msg);
      }
      this.$message.success("更新成功");
      this.getArticles();
    },
    //md上传成功之后的回调
    md_upload_success(res, id) {
      if (res.code) {
        //失败
        return this.$message.error(res.data);
      }
      this.update(id, { md: res.url });
    },
    //md上传之前的回调
    md_before_upload(file) {
      console.log(file);
      /* console.log(id); */
      let ifMd = /\.md$/.test(file.name);
      if (!ifMd) {
        this.$message.error("请上传md文件");
      }
      return ifMd;
    },
    //cover 上传之前的回调
    cover_before_upload(file) {
      if (file.status !== "ready") return;
      const isJPG = /^image\/(jpeg|png)$/.test(file.raw.type);
      const isLt2M = file.raw.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能为JPG|PNG格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //cover 上传成功时的回调
    cover_upload_success(res, id) {
      console.log(res);
      if (res.code) {
        //失败
        return this.$message.error(res.data);
      }
      this.update(id, { cover: res.url });
    },
    //删除文章
    async deleteArtitle(id) {
      let { data } = await this.$axios({
        method: "DELETE",
        url: "/adminServer/article/delete",
        data: {
          id,
        },
      });
      if (data.code) {
        return this.$message.error(data.msg);
      }
      this.$message.success("删除成功");
      this.getArticles();
    },
  },
  created() {
    this.getArticles();
  },
};
</script>

<style lang="less" scoped>
#ArticleManger {
  .cover {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .search {
    margin-bottom: 10px;
  }
}
</style>