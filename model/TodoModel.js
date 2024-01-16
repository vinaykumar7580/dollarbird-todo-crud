const mongoose=require("mongoose")

const todoSchema=mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"pending"
    },
    userId:{
        type:String
    }

},{
    versionKey:false
})

const TodoModel=mongoose.model("todo", todoSchema)

module.exports={TodoModel}