const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const { UserModel } = require("../model/UserModel")

const userRouter=express.Router()

userRouter.post("/register", async(req,res)=>{
    const {name, age, email, password}=req.body
    try{
        bcrypt.hash(password, 5, async(err, hash) =>{
            if(hash){
                let user=new UserModel({name, age, email, password:hash})
                await user.save()
                res.status(200).send({msg:"user registration success!"})
            }else{
                res.status(500).send({msg:"user registration failed!"})
            }
            
        });

    }catch(err){
        res.status(500).send({error:err})
    }
})

userRouter.post("/login", async(req, res)=>{
    const {email, password}=req.body;
    const user=await UserModel.findOne({email})
    
    try{
        if(user){
            bcrypt.compare(password, user.password, async(err, result)=> {
                if(result){
                    let token = jwt.sign({ userId:user._id }, 'todo');
                    res.status(200).send({msg:"user login success!", token})
                }else{
                    res.status(500).send({msg:"user login failed!"})
                }
            });

        }
        

    }catch(err){
        res.status(500).send({error:err})
    }
})

module.exports={userRouter}