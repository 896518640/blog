const express = require("express")
const app = express()
app.listen(4000,()=>{
    console.log("server run----4000");
})

//连接数据库
require("./middleware/mongoose")

//中间件 cors解决跨域
app.use(require("./middleware/cors"))

app.use(require("./middleware/session"))

//数据处理
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./public"))

//路由监听
app.use("/",require("./router"))