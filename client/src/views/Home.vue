
<template>
  <div id="Home">
    <!-- hello -->
    <article class="hello">
      <h2>Hello!</h2>
      <p class="des">
        您好啊！欢迎来到我的博客!我是一名努力的前端爱好者,同时目前也是一
        名在校大三学生，致力于成为一名优秀的前端攻城狮,热衷于研究Javascr
        ipt、Node.js、Vue...这里是我的主页！我会在这里发表一些不太成熟的
        技术文章,记录一些俺的日常。博客目前使用的是Vue+Element+Node+Expr
        ess+Mongoose+Nuxt搭建的如果您对源码感兴趣的话，可以<a
          href="https://github.com/896518640"
          target="_blank"
          >点击这里</a
        >。欢迎提出宝贵的意见哦！
      </p>
      <div class="info">
        <div class="left">
          <h3>Personal information</h3>
          <ul>
            <li>
              <p class="dt">Nickname</p>
              <p class="dd">东东啊</p>
            </li>
            <li>
              <p class="dt">Address</p>
              <p class="dd">安徽省阜阳市</p>
            </li>
            <li>
              <p class="dt">Email</p>
              <p class="dd">896518640@qq.com</p>
            </li>
            <li>
              <p class="dt">Github</p>
              <p class="dd">
                <a href="">https://github.com/896518640</a>
              </p>
            </li>
          </ul>
        </div>
        <div class="right">
          <h3>Skills</h3>
          <ul>
            <li>
              <p class="lang">
                <span class="s1">HTML & CSS3</span>
                <span class="s2">90%</span>
              </p>
              <p class="level">
                <span style="width:90%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">Javascript</span>
                <span class="s2">85%</span>
              </p>
              <p class="level">
                <span style="width:85%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">NodeJs</span>
                <span class="s2">80%</span>
              </p>
              <p class="level">
                <span style="width:80%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">Vue & React & 小程序</span>
                <span class="s2">65%</span>
              </p>
              <p class="level">
                <span style="width:65%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">Flutter</span>
                <span class="s2">35%</span>
              </p>
              <p class="level">
                <span style="width:35%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">Electron</span>
                <span class="s2">30%</span>
              </p>
              <p class="level">
                <span style="width:30%"></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </article>

    <!-- article -->
    <article class="article">
      <h2>ARTICLE</h2>
      <p class="des">
        热门文章推荐。<router-link to="/article">更多文章</router-link>请访问文章页
      </p>
      <div class="content" v-if="hotArticle.length">
        <div class="left">
          <div class="art">
            <img src="../assets/img/article/1.jpg" alt="">
            <p class="title">{{hotArticle[0].title}}</p>
            <div class="cover">
              <a :href="`/article/${hotArticle[0]._id}`" target="_blank">
                <p>Tag:HTML</p>
                <p>View More</p>
              </a>
            </div>
          </div>
           <div class="art art2">
            <img src="../assets/img/article/3.jpg" alt="">
            <p class="title">{{hotArticle[1]?hotArticle[1].title:hotArticle[0].title}}</p>
            <div class="cover">
              <a :href="`/article/${hotArticle[1]?hotArticle[1]._id:hotArticle[0]._id}`" target="_blank">
                <p>Tag:HTML</p>
                <p>View More</p>
              </a>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="art art2">
            <img src="../assets/img/article/2.jpg" alt="">
            <p class="title">{{hotArticle[2]?hotArticle[2].title:hotArticle[0].title}}</p>
            <div class="cover">
              <a :href="`/article/${hotArticle[2]?hotArticle[2]._id:hotArticle[0]._id}`" target="_blank">
                <p>Tag:HTML</p>
                <p>View More</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 工作经历 -->
    <article class="work">
      <h2>Work Experience</h2>
      <ul>
        <li>
          <div class="left">
            <p class="time">2021-11</p>
          </div>
          <div class="right">
            <h3>Student employment management system</h3>
            <p class="img">
              <img src="../assets/img/technology/vue.jpg" alt="">
            </p>
            <p class="responsibility">Independent development</p>
            <p class="content">This project is a student management
               system based on Vue+Element UI. The project has login,
                registration, teacher and student information add, 
                delete, change and check functions. The front stage 
                uses the Elite-UI framework to build pages quickly, 
                the back stage uses Node.js and Express to build 
                services, and uses Mongodb and Mongoose databases 
                to operate CURD. In addition, the Restful architecture 
                is used to distinguish RESOURCE CRUD operations through
                 HTTP requests (GET, POST, PUT, and DELETE).</p>
          </div>
        </li>
        <li>
          <div class="left">
            <p class="time">2021-11</p>
          </div>
          <div class="right">
            <h3>Student employment management system</h3>
            <p class="img">
              <img src="../assets/img/technology/vue.jpg" alt="">
            </p>
            <p class="responsibility">Independent development</p>
            <p class="content">This project is a student management
               system based on Vue+Element UI. The project has login,
                registration, teacher and student information add, 
                delete, change and check functions. The front stage 
                uses the Elite-UI framework to build pages quickly, 
                the back stage uses Node.js and Express to build 
                services, and uses Mongodb and Mongoose databases 
                to operate CURD. In addition, the Restful architecture 
                is used to distinguish RESOURCE CRUD operations through
                 HTTP requests (GET, POST, PUT, and DELETE).</p>
          </div>
        </li>
        <li>
          <div class="left">
            <p class="time">2021-11</p>
          </div>
          <div class="right">
            <h3>Student employment management system</h3>
            <p class="img">
              <img src="../assets/img/technology/vue.jpg" alt="">
            </p>
            <p class="responsibility">Independent development</p>
            <p class="content">This project is a student management
               system based on Vue+Element UI. The project has login,
                registration, teacher and student information add, 
                delete, change and check functions. The front stage 
                uses the Elite-UI framework to build pages quickly, 
                the back stage uses Node.js and Express to build 
                services, and uses Mongodb and Mongoose databases 
                to operate CURD. In addition, the Restful architecture 
                is used to distinguish RESOURCE CRUD operations through
                 HTTP requests (GET, POST, PUT, and DELETE).</p>
          </div>
        </li>
        <li>
          <div class="left">
            <p class="time">2021-11</p>
          </div>
          <div class="right">
            <h3>Student employment management system</h3>
            <p class="img">
              <img src="../assets/img/technology/vue.jpg" alt="">
            </p>
            <p class="responsibility">Independent development</p>
            <p class="content">This project is a student management
               system based on Vue+Element UI. The project has login,
                registration, teacher and student information add, 
                delete, change and check functions. The front stage 
                uses the Elite-UI framework to build pages quickly, 
                the back stage uses Node.js and Express to build 
                services, and uses Mongodb and Mongoose databases 
                to operate CURD. In addition, the Restful architecture 
                is used to distinguish RESOURCE CRUD operations through
                 HTTP requests (GET, POST, PUT, and DELETE).</p>
          </div>
        </li>
      </ul>
    </article>

    <!-- contact -->
    <article class="contact" id="contact">
      <h2>CONTACT ME</h2>
      <p class="des">有任何问题请联系我吧，收到消息后会给您回复邮件的哦💕</p>
       <el-form
         ref="contactForm"
        :model="contactForm" 
        :rules="rules" 
        status-icon
         label-position="top" 
      >
    <el-form-item label="Your Name" prop="name">
      <el-input v-model="contactForm.name"></el-input>
    </el-form-item>
    <el-form-item label="Your Email" prop="email">
      <el-input v-model="contactForm.email"></el-input>
    </el-form-item>
    <el-form-item label="Subject" prop="subject">
      <el-input v-model="contactForm.subject"></el-input>
    </el-form-item>
    <el-form-item label="Your Message" prop="message">
      <el-input v-model="contactForm.message"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('contactForm')"
        >Send</el-button
      >
    </el-form-item>
  </el-form>
    </article>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      contactForm: {
        name: '',
        email:"",
        subject:"",
        message:""
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input your name',
            trigger: 'blur',
          }
        ],
        email: [
          {
            type:"email",
            required: true,
            message: 'Please input your email',
            trigger: 'blur',
          }
        ],
        message: [
          {
            required: true,
            message: 'Please input your message',
            trigger: 'blur',
          }
        ]
      },
      //文章列表
      hotArticle:[]
    }
  },
  methods: {
    submitForm(formName) {
      /* $refs 可以获取页面所有具有ref属性的元素集合 */
      this.$refs[formName].validate(async valid => {
        if (valid) {
          //通过ajax向后端发送数据
          let {data} = await this.$axios({
            method:"POST",
            url:"/contact",
            data:this.contactForm
          })
          if(data.code){
            return this.$message.error(data.msg)
          }
          this.$message.success("发送成功，我会尽快处理的")
          this.$refs.contactForm.resetFields()
          console.log(data);
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async getArticle(){
        let {data} = await this.$axios({
            method:"GET",
            url:"/get/article"
        })
        if(data.code)return 
        this.hotArticle = data.data.slice(0,3)
    }
  },
  created(){
    this.getArticle()
    console.log(this.hotArticle);
  }
};
</script>

<style lang="less" scoped>
#Home {
  article {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 10px 10px 10px -10px rgba(0,0,0,.3);
    h2 {
    margin-bottom: 15px;
    font-size: 30px;
    letter-spacing: 3px;
    padding-top: 10px;
    font-family: "Quicksand";
  }
    p.des {
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    /* 首行缩进 */
    text-indent: 2em;
    color: #444;
    font-size: 14px;
    letter-spacing: 4px;
    line-height: 30px;
    font-family: "Quicksand", "Microsoft YaHei";
    a {
      text-decoration: underline;
      color: #aaa;
    }
  }
  }
  article.hello {
    .info{
      font-family: "Quicksand";
      display: flex;
      div.left,div.right {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      h3 {
        margin-bottom: 30px;
        font-weight: 400;
        font-size: 22px;
        color: #666;
      }
      div.left {
        ul{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          li {
            display: flex;
            p.dt{
              width: 40%;
              font-weight: bold;
            }
            p.dd{
              flex: 1;
            }
          }
        }
      } 
      div.right {
        ul li{
          margin-bottom: 20px ;
          &:last{
            margin-bottom: 0;
          }
          p.lang{
            display: flex;
            justify-content: space-between ;
            letter-spacing: 2px;
            span.s1 {
              font-weight: bold;
            }
            span.s2 {
              font-size: 12px;
              font-weight: bold;
              color: #999;
            }
          }
          p.level{
            width: 100%;
            height: 5px;
            background: #ececec;
            span{
              display: block;
              height: 100%;
              background: #bfe2e6;
            }
          }
        }
      }
    }
  }
  article.article {
    div.content{
      display: flex;
      div.left {
        margin-right: 1px;
        flex: 1;
      }
      div.right {
        margin-left: 1px;
        flex: 1;
      }
      div.art {
        overflow: hidden;
        position: relative;
        img {
          display: block;
          width: 100%;
        }
        &.art2 {
          margin-top: 1px;
        }
        p.title {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30px;
          background-color:rgba(0,0,0,.1) ;
          font-weight: 700;
          line-height: 30px;
          color: #fff;
          text-align: center;
          transition: bottom .3s;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-family: Quicksnad;
        }
        div.cover{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          a{
            display: block;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.5);
            opacity: 0;
            transition: opacity .3s;
            p {
              position: absolute;
              font-family: Quicksand;
              font-weight: bold;
              transition: all .3s;
            }
            p:nth-child(1) {
              top: 20%;
              width: 100%;
              text-align: center;
              color: #fff;
              font-size: 22px;
              text-decoration: uppercase;
            }
            p:nth-child(2) {
              left: 50%;
              bottom: 20%;
              width: 30%;
              height: 32px;
              border-radius: 16px;
              text-align: center;
              line-height: 32px;
              transform: translateX(-50%);
              color: #000;
              background-color: #bfe2ef ;
            }
          }
        }
        &:hover {
          p.title {
            bottom: -30px;
          }
          div.cover a {
            opacity: 1;
            P:nth-child(1) {
              top: 32%;
            }
            P:nth-child(2) {
              bottom:32%;
            }
          }
        }
      }
    }
  }
  article.work {
    font-family: Quicksand;
    ul {
      margin-top: 40px;
      li {
        display: flex;
        div.left{
          width: 200px;
          p.time{
            position: relative;
            z-index: 0;
            top: -12px;
            width: 160px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-weight: 700;
            background-color: #bfe2e6;
            &::after{
              position: absolute;
              top: 0;
              right: -30px;
              content: "";
              width: 0;
              height: 0;
              border: 15px solid transparent;
              border-left-color: #bfe2e6;
            }
          } 
        }
        div.right{
          box-sizing: border-box;
          flex: 1;
          padding-left:20px ;
          padding-right: 40px;
          padding-bottom: 40px;
          border-left: 2px solid #bfe2e6;
          h3{
            position: relative;
            margin-right: 20px;
            margin-top: -10px;
            margin-bottom: 20px;
            line-height: 25px;
            font-size: 20px;
            &::before{
              position: absolute;
              content: "";
              top: 10px; 
              left: -23px;
              width: 4px;
              height: 4px;
              background-color: #000;
            }
          }
          p.img{
              margin-bottom: 20px;
            }
            p.responsibility{
              color: #000;
              margin-bottom: 20px;
            }
            p.content{
              color: #777;
              letter-spacing: 1px;
              font-size: 16px;
            }
        }
        &:last-child div.right{
          border-color: transparent;
        }
      }
    }
  }
  article.contact {
    .el-form{
      padding: 0 40px;
      font-family: Quicksand;
      .el-button{
        display: block;
        width: 100px;
        height: 40px;
        margin-top: 35px;
        border: 0;
        border-radius: 20px;
        box-shadow: 0 0 0 #bbb;
        background-color: #bfe2e6;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 2px;
        font-family: Quicksand;
        color: #000;
        outline: 0;
        cursor: pointer;
        transition: box-shadow 0.3s;
        &:hover{
          box-shadow: 0 3px 5px #bbb;
        }
      }
    }
  }
}
</style>