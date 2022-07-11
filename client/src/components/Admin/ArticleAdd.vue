
<template>
  <div id="ArticleAdd">
    <el-form ref="form" :model="form" status-icon label-width="120px">
      <el-form-item label="标题：">
        <el-input
          v-model="form.title"
          placeholder="可通过上传md自动获取文件名"
        ></el-input>
      </el-form-item>
      <el-form-item label="描述：">
        <el-input v-model="form.des" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="md上传：">
        <el-upload
          class="upload-demo"
          :with-credentials="true"
          :limit="1"
          drag
          :on-change="fileChange"
          :on-success="md_upload_success"
          :before-remove="beforeRemove"
          :action="`${baseURL}/adminServer/article/md`"
          :auto-upload="false"
          ref="mdForm"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload_text">将文件拖到此处，或<em>点击上传</em></div>
          <template #tip>
            <div class="el-upload_tip">只能上传 .md 文件</div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="封面上传：">
        <el-upload
          class="avatar-uploader"
          :with-credentials="true"
          :action="`${baseURL}/adminServer/article/cover`"
          :show-file-list="false"
          :auto-upload="false"
          :on-success="cover_upload_success"
          :on-change="coverChange"
          ref="imgForm"
        >
          <div
            v-if="imageUrl"
            class="avatar"
            :style="{ backgroundImage: `url(${imageUrl})` }"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确认发表</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        des: "",
        md: "",
        cover: "",
      },
      imageUrl: "",
    };
  },
  methods: {
    submitForm() {
     this.$refs.mdForm.submit()
    },
    //文章的发表
    async submit(){
      let {data} = await this.$axios({
        method:"POST",
        url:"/adminServer/article/add",
        data:this.form
      })
      console.log(data);
      if(data.code){
        return this.$message.error(data.msg)
      }
      //跳转到对应的文章
      this.$router.push(`/article/${data.data.id}`)
      this.$message.success("发表成功")
    },
    //添加md文件的钩子
    fileChange(file, fileList) {
      console.log(file);
      if (file.status !== "ready") return;
      //简单判断是否是.md文件
      let reg = /^(.+)\.md$/;
      if (reg.test(file.name)) {
        //当没有输入title的时候 获取名字填充到title
        //console.log(this.form.name);、

        //通过原子组进行匹配 两者是一致的结果
        //console.log(file.name.match(reg)[1]);
        //console.log(RegExp.$1);
        if (this.form.title) return;
        this.form.title = RegExp.$1;
      } else {
        //提示并阻止文件添加
        this.$message.error("只能上传.md文件");
        fileList.pop();
      }
    },
    //删除md文件之前文件的钩子
    beforeRemove() {
      this.form.title = "";
    },
    //md上传成功的钩子函数
    md_upload_success(res){ 
      //上传md失败
      if(res.code){   
        return this.$message.error("上传md失败，请检查后端报错")
      }
      //md上传成功
      this.form.md = res.url
      //判断是否又封面图
      if(this.imageUrl){
        //有封面图就触发封面图的上传
        this.$refs.imgForm.submit()
      }else{
        //没有封面图 直接发表文章
        this.submit()
      }
      console.log(res);
    },
    //添加封面的钩子
    coverChange(file, fileList) {
      if (file.status !== "ready") return;
      const isJPG = /^image\/(jpeg|png)$/.test(file.raw.type);
      const isLt2M = file.raw.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能为JPG|PNG格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      if(isJPG && isLt2M){
        this.imageUrl = URL.createObjectURL(file.raw);
      }else{
        this.imageUrl = " "
        fileList.pop()
      }
    },
    //封面上传成功
    cover_upload_success(res){
      console.log(res);
      if(res.code){
        return this.$message.error("上传封面失败，请检查后端后重试")
      }
      this.form.cover = res.url
      this.submit()
    }
  },
};
</script>

<style lang='less' scoped>
#ArticleAdd {
  /deep/.el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-top: 10px;
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
  }
  div.avatar {
    display: block;
    width: 178px;
    height: 178px;
    max-width: 178px;
    max-height: 178px;
    background: none center center/cover;
  }
}
</style>