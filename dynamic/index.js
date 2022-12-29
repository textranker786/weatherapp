const express = require("express");
const app =express();
const hbs = require("hbs");
const path = require("path");

app.set("view engine","hbs")

const staticpath=(path.join(__dirname,"../weather"))
const templatepath=(path.join(__dirname,"../templates"))
app.use(express.static(staticpath))
app.set("views",templatepath)
app.get("/",(req,res)=>{
  res.render("index");
})
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:" 404 error page not found"
    })
  })

 app.listen(3000,"127.0.0.1",()=>{
    console.log("listening to the port of 3000")
 })