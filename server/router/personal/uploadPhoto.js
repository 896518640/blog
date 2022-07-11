const express = require("express")
const router = express.Router()
const userDB = require("../../db/user")
const path = require("path")
//处理文件上传的时候 需要引入multer包 原生进行处理会比较麻烦
const multer = require("multer")

//磁盘存储的代码
let upload = multer({
    storage: multer.diskStorage({
        //文件存储的目录
        destination(req, file, cb){
            cb(null, path.join(__dirname,"../../public/file/photo"))
        },
        //文件的名字
        filename(req, file, cb){
            let name = req.session.userInfo._id
            let {ext} = path.parse(file.originalname)
            //所有的req都是同一个 
            req.filename = name + ext;
            cb(null, name+ext)
        }
    })
}).single('file')

router.post("/", (req, res) => {
    upload(req,res,async(err)=>{
        //上传失败
        if(err){
            //发生错误
            return res.send({
                code:9,
                msg:"上传失败"
            })
        }
        //上传成功
        //修改数据库信息
        let _id = req.session.userInfo._id
        let photo = `/file/photo/${req.filename}`
        await userDB.findByIdAndUpdate(_id,{photo})
        //如果允许的格式比较多 需要删除之前头像
        //更新session
        req.session.userInfo.photo = photo
        //返回前端
        res.send({
            code:0,
            msg:"头像修改成功",
            data:req.session.userInfo
        })
    })
})
module.exports = router