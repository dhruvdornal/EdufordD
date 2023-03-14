const express = require("express");
const app = express();
const path = require("path");
let alert = require("alert");
const hbs = require("hbs");
const suggestion = require("./mongo");

const templatePath = path.join(__dirname,'../templates');

app.use(express.json())
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.static("images"));
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("test");
})
app.get("/2nd",(req,res)=>{
    res.render("2nd");
})
app.get("/3rd",(req,res)=>{
    res.render("3rd");
})
app.get("/4th",(req,res)=>{
    res.render("4th");
})

app.post("/test", async (req,res)=>{
    const data={
        name:req.body.name
    }
    await suggestion.insertMany([data]);
    alert("Thank you for your valuable suggestion");
})

app.listen(2000,()=>{
    console.log("Listening at 2000");
})
