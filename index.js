const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT;


app.get("/",(req,res)=>{
    res.send({msg:"Base One"})
})

app.get("/about",(req,res)=>{
    res.send({msg:"about One"})
})

app.listen(PORT,()=>{
    console.log("Connected");
})