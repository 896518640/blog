<template>
  <div class="Visitor">
    <h4>最近访客</h4>
    <ul>
      <li
          v-for="item in visitorData"
          :key="item._id"
          :style="{
              backgroundImage:`url(${baseURL}${item.visitor.photo})`
              }">
        <p>{{ item.visitor.user }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Visitor",
  data() {
    return {
      visitorData: []
    }
  },
  async created() {
    let {data} = await this.$axios({
      method: "GET",
      url: "/get/visitor"
    })
    console.log(data);
    if (data.code) return
    this.visitorData = data.data.slice(0, 12)
  }
}
</script>

<style scoped lang="less">
.Visitor {
  box-sizing: border-box;
  overflow: hidden;
  background-color: #fff;
  width: 100%;
  margin-top: 15px;
  box-shadow: 0 0 4px #ddd;
  padding: 20px;
  background-color: rgba(255, 255, 255, .8);
  box-shadow: 10px 10px 10px -10px rgba(0, 0, 0, .5);

  h4 {
    line-height: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e9e7;
    border-bottom: 1px solid rgba(0,0,0,.3);
    color: #383937;
    font-size: 16px;
  }

  ul {
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;

    li {
      position: relative;
      float: left;
      width: 53px;
      height: 53px;
      margin-right: 6px;
      border-radius: 3px;
      margin-bottom: 6px;
      background: none no-repeat 50%/cover;
      background-image: url("../../assets/img/personal/tx.jpg");
      transition: .3s;
      &:nth-child(4n) {
        margin-right: 0;
      }
      &:hover{
        box-shadow: 0 15px 15px -10px rgba(0,0,0,.3);
        transform:translateY(-2px);
      }
      p {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 16px;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        text-align: center;
        line-height: 16px;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

      }
    }
  }
}
</style>