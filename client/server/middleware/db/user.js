const mongoose = require("mongoose")
let Schema = mongoose.Schema
let userSchema = new Schema({
    user:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    //头像
    photo:{
        type:String,
        default:"/file/photo/1.jpg"
    }
})

module.exports =mongoose.model("user",userSchema)