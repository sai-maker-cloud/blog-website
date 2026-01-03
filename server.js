const express=require("express");

const path=require("path");
const app=express();
const port=process.env.port||5000;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

let blog=[];

app.get("/",(req,res)=>{
    res.sendFile(path.join(_dirname+"/public/index.html"));
})
app.post("/app-blog",(req,res)=>{
    blog.push(req.body);
    res.redirect("/");

})
app.get("/blogs",(req,res)=>{
    res.json(blog);
})
app.listen(port,()=>{
    console.log("server running");
})