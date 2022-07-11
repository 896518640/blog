const express = require("express")
const router = express.Router()
const userDB = require("../../db/user")
const messageDB = require("../../db/message")
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
//留言发表
router.post("/submit", async (req, res) => {
    // 理论上所有的异步请求都会出错 所以加上try catch会比较保险一些
    // 但是概率会比较低
    try {
        let { val } = req.body
        // 验证数据格式
        if (!val || !val.trim() || val.length > 100) {
            return res.send({
                code: 1,
                msg: "留言内容格式错误"
            })
        }
        // 存到数据库
        let _id = req.session.userInfo._id
        await messageDB.create({
            text: val.trim(),
            author: _id,
        })
        res.send({
            code: 0,
            msg: "留言成功"
        })

    } catch (e) {
        res.send({
            code:4,
            msg:"服务器错误"
        })
    }
})
//父级点赞
router.post("/like/parent",async (req,res)=>{
    //修改数据库
    //获取当前用户的id
    let _id = req.session.userInfo._id
    //获取需要点赞的留言id
    let {id} = req.body

    if(!id){
        return res.send({
            code:1,
            msg:"id格式不正确"
        })
    }
    let doc = await messageDB.findById(id)
    //检测doc是否存在
    if(!doc){
        return res.send({
            code:1,
            msg:"id格式不正确"
        })
    }
    //判断是否已经点过赞
    if(doc.likes.includes(_id)){
        //点过赞 -- 删除likes字段里面的当前用户id 
        await messageDB.findByIdAndUpdate(id,{$pull:{likes:_id}})
    }else{
        //没点过赞 --like字段添加当前用户id $push 向数组添加一条值
        //$slice 截取字符 $addToSet 添加值 若存在就不添加
        //pop {$pop:{arr:1}}删除arr数组的最后一项 -1则为第一项
        //$pull {$pull:{arr:123}}删除arr数组 所有的123的值
        //$set {$set:{"userInfo.test":123""}} 修改userInfo.test 为123
        //$inc {$inc:{age:1}} 修改age 自增1
        //$unset {$unset:{age:0}} 修改age属性（写啥都是移除）
        await messageDB.findByIdAndUpdate(id,{$push:{likes:_id}})
    }
    res.send({
        code:0,
        msg:"操作完成"
    })
})
//子级点赞
router.post("/like/child",async(req,res)=>{
    let{pid,cid,cindex} = req.body

    let parent = await messageDB.findById(pid)
    //验证数据
    if(!parent){
        return res.send({
            code:1,
            msg:"父评论id错误"
        })
    }
    let child = parent.children.id(cid)
    if(!child){
        return res.send({
            code:1,
            msg:"子评论id错误"
        })
    }
    let userId = req.session.userInfo._id
    if(child.likes.includes(userId)){
        //已点过赞
        await messageDB.findByIdAndUpdate(pid,{$pull:{[`children.${cindex}.likes`]:userId}})
    }else{
        //未点过赞
        //修改子文档likes
        await messageDB.findByIdAndUpdate(pid,{$push:{[`children.${cindex}.likes`]:userId}})
    }
    
    res.send({
        code:0,
        msg:"操作成功"
    })
})
//回复的提交
router.post("/reply/submit",async (req,res)=>{
    let {text,replyUser,id} = req.body
    //判断数据格式
    if(!text){
        return res.send({
            code:1,
            msg:"回复内容为空"
        })
    }
    if(text.length>100){
        return res.send({
            code:1,
            msg:"回复内容过长"
        })
    }
    //验证评论id
    let doc = await messageDB.findById(id)
    if(!doc){
        return res.send({
            code:1,
            msg:"评论id错误"
        })
    }
    //验证用户id
    let doc2 = await userDB.findById(replyUser)
    if(!doc2){
        return res.send({
            code:3,
            msg:"回复的用户id错误"
        })
    }

    //存到数据库
    await messageDB.findByIdAndUpdate(id,{$push:{children:{
        text,
        author:req.session.userInfo._id,
        replyUser
    }}})
    res.send({code:0,msg:"回复成功  "})
})
module.exports = router