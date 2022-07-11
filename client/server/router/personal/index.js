const express = require("express")
const router = express.Router()
userDB = require("../../db/user")
//鉴权
router.use((req,res,next)=>{
    //console.log("userInfo",req.session.userInfo);
    if(!req.session.userInfo){
        return res.send({
            code:6,
            msg:"用户未登录"
        })
    }
    next()
})
//修改用户名
router.post("/user",async(req,res)=>{
    //console.log(req.body);
    const {user} = req.body
    //验证符不符合规则
    if(!/^[\w\u4e00-\u9fa5\u0800-\u4e00\uac00-\ud7ff]{2,8}$/.test(user)){
       return res.send({
            code:1,
            msg:"用户名格式不正确"
        }) 
    }
    //验证新旧用户名是否一样
    if(user === req.session.userInfo.user){
        return res.send({
            code:7,
            msg:"新用户名于原用户名相同"
        })
    }
    //验证用户名是否已存在
    let doc = await userDB.findOne({user})
    if(doc) {
        return res.send({
            code:2,
            msg:"用户已存在"
        })
    }
    //修改用户名
    await userDB.findByIdAndUpdate(req.session.userInfo._id,{user})
    //更新session
    req.session.userInfo.user = user
    //返回前端
    res.send({
        code:0,
        msg:"用户名修改完成",
        data:req.session.userInfo
    })
})
//修改密码
router.post("/pass",async (req,res)=>{
    let {oldPass,pass} = req.body
    let _id = req.session.userInfo._id
    //验证新密码格式
    if(!/^[\w!\[\]{}\/\\:"|?>·`<@#$%^&*\(\)_+=~\-]{6,18}$/.test(oldPass)){
        return res.send({
            code:1,
            msg:"密码格式不正确"
        })
    }
    //验证原密码是否正确
    //从session里面查当前用户id 去数据库找密码
    let doc = await userDB.findById(_id)
    //console.log("DBpass",doc.pass);
    //console.log("oldPass",oldPass);
    if(doc.pass !== oldPass){
        return res.send({
            code:5,
            msg:"原密码不正确"
        })   
    }
    //新密码于旧密码一样
    if(oldPass === pass){
        return res.send({
            code:8,
            msg:"新旧密码相同"
        })
    }
    //修改密码
    await userDB.findByIdAndUpdate(_id,{pass})
    //销毁session
    req.session.destroy()
    //返回前端
    res.send({
        code:0,
        msg:"密码修改成功"
    })
})
//头像上传
router.use("/photo",require("./uploadPhoto"))
module.exports = router