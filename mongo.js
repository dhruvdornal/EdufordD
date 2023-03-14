const http = require("http");
const server = http.createServer((req,res)=>{
    console.log("changes made from browser");
});
const mongoose = require("mongoose");
mongoose.set('strictQuery',false);

const db_link = 'mongodb+srv://dhruvdornal:EiT8bto3v9PBG41S@cluster0.ngxrpuo.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db_link).then(function(db){
    console.log('db connected');
}).catch(function(err){
    console.log(err);
});

const signupSchema = new mongoose.Schema({
    name:{
        type:String
    }
});

const suggestion = new mongoose.model("suggestion",signupSchema);
module.exports=suggestion;