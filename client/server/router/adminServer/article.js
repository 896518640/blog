const express = require("express")
const router = express.Router()
const path = require("path")
//处理文件上传的时候 需要引入multer包 原生进行处理会比较麻烦
const multer = require("multer")
const articleDB = require("../../db/article")
//磁盘存储的代码
let md_upload = multer({
    storage: multer.diskStorage({
        //文件存储的目录
        destination(req, file, cb){
            cb(null, path.join(__dirname,"../../public/file/md"))
        },
        //文件的名字
        filename(req, file, cb){
            //所有的req都是同一个 
            req.md_name = `md-${Date.now()}.md`;
            cb(null,req.md_name)
        }
    })
}).single('file')
let cover_upload = multer({
    storage: multer.diskStorage({
        //文件存储的目录
        destination(req, file, cb){
            cb(null, path.join(__dirname,"../../public/file/cover"))
        },
        //文件的名字
        filename(req, file, cb){
            //所有的req都是同一个 
            let {ext} = path.parse(file.originalname)
            req.cover_name = `cover-${Date.now()}${ext}`;
            cb(null,req.cover_name)
        }
    })
}).single('file')
//上传md
router.post("/md",(req,res)=>{
    
    let doc = req.body;
    console.log(doc);
    md_upload(req,res,async(err)=>{
        //console.log(req);
        //上传失败
        if(err){
            return res.send({
                code:9,
                msg:"上传失败"
            })
        }
        //上传成功
        res.send({
            code:0,
            msg:"md文件上传成功",
            url:`/file/md/${req.md_name}`
        })
    })
})
//上传cover
router.post("/cover",(req,res)=>{
    cover_upload(req,res,async(err)=>{
        //console.log(req);
        //上传失败
        if(err){
            return res.send({
                code:9,
                msg:"上传失败"
            })
        }
        //上传成功
        res.send({
            code:0,
            msg:"cover文件上传成功",
            url:`/file/cover/${req.cover_name}` 
        })
    })
})
//文章发表
router.post("/add",async(req,res)=>{
    console.log(req.body);
    let {title,des,md,cover} = req.body
    let doc =  await articleDB.create({
        title:title||undefined,
        des:des||undefined,
        md,
        cover:cover||undefined,
        author:req.session.userInfo._id
    })
    res.send({
        code:0,
        msg:"文章发表成功",
        data:{
            id:doc._id
        }
    })
})
//文章修改
router.post("/update",async(req,res)=>{
    let {id,doc} = req.body
    await articleDB.findByIdAndUpdate(id,doc)
    console.log(id);
    console.log(doc);
    res.send({
        code:0,
        msg:"修改成功"
    })
})
//文章删除
router.delete('/delete',async(req,res)=>{
    let {id} = req.body

    await articleDB.findByIdAndRemove(id)
    res.send({
        code:0,
        msg:"删除完成"
    })
})
module.exports = router