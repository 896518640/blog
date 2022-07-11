const express = require("express")
const router = express.Router()

//注册路由
router.use("/reg",require("./reg"))

//登陆路由
router.use("/login",require("./login"))

//个人信息修改
router.use("/personal",require("./personal"))

//留言
router.use("/msg",require("./msg"))

//管理员
router.use("/adminServer",require("./adminServer"))

//请求所有数据
router.use("/get",require("./get"))

//反馈消息
router.use("/contact",require("./contact"))
module.exports = router