const mongoose = require("mongoose")
let Schema = mongoose.Schema
let contactSchema = new Schema({
    //名字
    name:{
        type:String,
        required:true
    },
    //邮箱
    email:{
        type:String,
        required:true
    },
    //主题
    subject:{
        type:String,
        default:""
    },
    //内容
    message:{
        type:String,
        required:true
    },
    //日期
    date:{
        type:String,
        default:Date.now
    },
    //处理情况
    read:{
        type:Boolean,
        default:false
    }
})

module.exports =mongoose.model("contact",contactSchema)