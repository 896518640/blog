const express = require("express")
const router = express.Router()
const userDB = require("../../db/user.js")
const visitorDB = require("../../db/visitor.js")
//添加访客
async function addVisitor(req) {
    try {
        let userID = req.session.userInfo._id

        //先看村没存当前用户
        let doc = await visitorDB.findOne({ visitor: userID })
        if (doc) {
            //已经存在该用户访问记录
            await visitorDB.findOneAndUpdate({
                visitor: userID
            }, {
                date: Date.now()
            }
            )
        } else {
            //不存在该用户访问记录
            await visitorDB.create({
                visitor: userID
            })
        }
    } catch (e) { }
}
//登录
router.post("/", async (req, res) => {
    //检测数据格式
    let { user, pass } = req.body
    //console.log(req.body);
    if (!/^[\w\u4e00-\u9fa5\u0800-\u4e00\uac00-\ud7ff]{2,8}$/.test(user) &&
        !/^[\w!\[\]{}\/\\:"|?>·`<@#$%^&*\(\)_+=~\-]{6,18}$/.test(pass)
    ) {
        return res.send({
            code: 1,
            msg: "数据格式错误"
        })
    }
    //验证用户名和密码
    let doc = await userDB.findOne({ user })
    if (!doc) {
        return res.send({
            code: 3,
            msg: "用户名不存在"
        })
    }
    console.log("doc", doc._id);
    //验证密码
    if (doc.pass !== pass) {
        return res.send({
            code: 5,
            msg: "密码错误哦，请检查用户名和密码"
        })
    }
    //登陆成功
    let userInfo = {
        user: doc.user,
        _id: doc._id,
        photo: doc.photo,
        admin:doc.admin
    }
    req.session.userInfo = userInfo
    //更新visitor
    addVisitor(req)
    res.send({
        code: 0,
        msg: "登陆成功喽",
        data: userInfo
    })
})

//检测是否登录
router.post("/check", (req, res) => {
    let data = req.session.userInfo
    //console.log(req.session);
    if (data) {
        //登录过的
        //更新visitor
        addVisitor(req)
        res.send({
            code: 0,
            msg: "已经登录",
            data
        })
    } else {
        //没有登陆过的
        res.send({
            code: 1,
            msg: "未登录",
            data: {}
        })
    }
})

//退出登录
router.post("/out", async (req, res) => {
    //销毁session
    req.session.destroy()
    res.send({
        code: 0,
        msg: "退出登录成功"
    })
})
module.exports = router