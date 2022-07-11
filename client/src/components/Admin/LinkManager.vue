
<template>
  <div id="LinkManager">
     <el-table :data="linkData" style="width: 100%">
    <el-table-column prop="name" label="名称">
        <template #default="scope">
            <el-input v-model="scope.row.name"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="home" label="首页">
        <template #default="scope">
            <el-input v-model="scope.row.home"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="logo" label="logo">
        <template #default="scope">
            <el-input v-model="scope.row.logo"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="des" label="描述">
         <template #default="scope">
            <el-input v-model="scope.row.des"></el-input>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" >
      <template #default="scope">
        <el-button type="success" plain size="small" @click="update(scope.row)"
          >修改</el-button
        >
        <el-button type="danger" plain size="small" @click="deleteLink(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>   
</template>

<script>
export default {
  data() {
    return {
      linkData: [],
    };
  },
  methods: {
    //请求link数据
    async getLinkData() {
      let { data } = await this.$axios({
        method: "GET",
        url: "/get/link",
      });
      console.log(data);
      if (data.code) {
        return this.$message.error(data.msg);
      }
      this.linkData = data.data;
    },
    async update(item){
        let {data} = await this.$axios({
            method:"POST",
            url:"/adminServer/link/update",
            data:{
                name:item.name,
                home:item.home,
                logo:item.logo,
                des:item.des,
                id:item._id
            }
        })
        console.log(data);
        if(data.code){
            return this.$message.error(data.msg)
        }
        this.$message.success("更新完成")
    },
    async deleteLink(item){
        let {data} = await this.$axios({
            method:"delete",
            url:"/adminServer/link/delete",
            data:{
                id:item._id
            }
        })
        console.log(data);
        if(data.code){
            return this.$message.error(data.msg)
        }
        this.$message.success("删除完成")
        this.getLinkData()
    }
  },
  created() {
    this.getLinkData();
  },
};
</script>

<style lang='less' scoped>
#LinkManager {
  .el-button + .el-button {
    margin-left: 0;
  }
}
</style>