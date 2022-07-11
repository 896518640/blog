
<template>
  <div id="ContactMsg">
    <el-table :data="contactData" style="width: 100%">
      <el-table-column 
      prop="date" 
      label="date" 
      />
      <el-table-column 
      prop="name" 
      label="name" 
      />
      <el-table-column 
      prop="email" 
      label="email" 
      />
      <el-table-column 
      prop="subject" 
      label="subject" 
      />
      <el-table-column 
      prop="message" 
      label="message" 
      />
      <el-table-column 
      prop="read" 
      label="是否处理" 
      width="200px"
      >
        <template #default="scope">
          <el-switch
            style="display:block"
            v-model="scope.row.read"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="已处理"
            inactive-text="未处理"
            @change="switchhandle(scope.row)"
          >
          </el-switch>
        </template>
      </el-table-column >
    </el-table>
  </div>
</template>

<script>
export default {
  name:"ContactMsg",
  data(){
    return{
      contactData:[]
    }
  },
  methods:{
    //请求所有数据
    async getContactData(){
      let {data} = await this.$axios({
        method:"GET",
        url:"/adminServer/contact"
      })
      console.log(data);
      if(data.code){
        return this.$message.error(data.msg);
      }
      this.contactData = data.data
    },
    //触发switch
    async switchhandle(item){
      let {data} = await this.$axios({
        method:"POST",
        url:"/adminServer/contact/read",
        data:{
          id:item._id,
          read:item.read
        }
      })
      if(data.code){
        return this.$message.error(data.msg)
      }
    }
  },
  created(){
    this.getContactData()
  }
};
</script>
