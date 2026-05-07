import express from "express"
import tokenize from "./processing/tokenizer"
const app=express()
app.get("/",(req,res)=>{
    const token=tokenize("Notion is a poductivity tool")
})