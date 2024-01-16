const express=require("express")
const jwt=require("jsonwebtoken");
const { TodoModel } = require("../model/TodoModel");
const todoRouter=express.Router()

todoRouter.post("/add-todo", async(req, res)=>{
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "todo");
    const {title, description}=req.body;

    try{
        if(decoded){
            let todo=new TodoModel({title, description, userId:decoded.userId})
            await todo.save()
            res.status(200).send({msg:"todo added successfully!"})
        }else{
            res.status(500).send({msg:"please, login first!"})
        }

    }catch(err){
        res.status(500).send({error:err})
    }

})

todoRouter.get("/get-todo", async(req, res)=>{
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "todo");

    try{
        if(decoded){
            let todo=await TodoModel.find({userId:decoded.userId})
            res.status(200).send(todo)
        }

    }catch(err){
        res.status(500).send({error:err})
    }

})

todoRouter.patch("/update-todo/:id", async(req, res)=>{
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "todo");
    let {id}=req.params;
    let payload=req.body

    const todo=await TodoModel.findOne({_id:id})

    try{
        if(todo.userId==decoded.userId){
            await TodoModel.findByIdAndUpdate({_id:id}, payload)
            res.status(200).send({msg:"todo updated successfully!"})
        }else{
            res.status(500).send({msg:"please, login first!"})
        }

    }catch(err){
        res.status(500).send({error:err})
    }

})

todoRouter.delete("/delete-todo/:id", async(req, res)=>{
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "todo");
    let {id}=req.params;

    const todo=await TodoModel.findOne({_id:id})

    try{
        if(todo.userId==decoded.userId){
            await TodoModel.findByIdAndDelete({_id:id})
            res.status(200).send({msg:"todo deleted successfully!"})
        }else{
            res.status(500).send({msg:"please, login first!"})
        }

    }catch(err){
        res.status(500).send({error:err})
    }

})

module.exports={todoRouter}