const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/UserRoute")
const { todoRouter } = require("./routes/TodoRoute")

const app=express()

app.use(express.json())
app.use(cors())

app.use("/user", userRouter)

app.use("/todos", todoRouter)

app.listen(8080, async()=>{
    try{
        await connection
        console.log("database connected")

    }catch(err){
        console.log(err)
        console.log("database not connected")
    }
})