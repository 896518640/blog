const express = require("express")
const router = express.Router()
const linkDB = require("../../db/link")
const {URL} = require("url")
//友链添加
router.post("/add",async(req,res)=>{
    //先判断连接是否重复
    let {origin} = new URL(req.body.home)
    let doc = await linkDB.findOne({home:new RegExp(origin)})
    console.log(doc);
    if(doc) {
        return res.send({
            code: 10,
            msg:"友链已存在，如需更改请切换到管理友链页面"
        })
    }
    //添加到数据库
    await linkDB.create(req.body)

    //返回前端
    res.send({
        code:0,
        msg:"添加成功"
    })
})
//友链修改
router.post("/update",async(req,res)=>{
    let {id,name,des,home,logo} = req.body
    await linkDB.findByIdAndUpdate(id,{name,home,des,logo})
    res.send({
        code:0,
        msg:"更新完成"
    })
})
//友链删除
router.delete("/delete",async(req,res)=>{
    let {id} = req.body
    await linkDB.findByIdAndDelete(id)
    res.send({
        code:0,
        msg:"删除成功"
    })
})
module.exports = router