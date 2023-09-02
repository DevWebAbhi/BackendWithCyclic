const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT;
const PHONENO=process.env.PHONENO;

app.get("/",(req,res)=>{
    res.send({msg:"Base One"})
})

app.get("/about",(req,res)=>{
    res.send({msg:"about One"})
})

app.get("/contact",(req,res)=>{
    res.send({msg:`$number${PHONENO}`})
})
app.listen(PORT,()=>{
    console.log("Connected");
})