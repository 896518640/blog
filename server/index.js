const express = require("express")
const app = express()
const path = require("path")
app.listen(80,()=>{
    console.log("server run----80");
})

//连接数据库
require("./middleware/mongoose")

//中间件 cors解决跨域 上线之后不需要cors 会有影响
app.use(require("./middleware/cors")) 
app.use(require("./middleware/session"))

//数据处理
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./public"))

//路由监听
app.use("/",require("./router"))
//让路由正常的跳回前端路由
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/00-index.html"))
})