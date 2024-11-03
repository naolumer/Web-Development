import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome to Express js")
})

app.listen(8000,()=>console.log("Server Up!"))