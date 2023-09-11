const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
var num1=parseFloat(req.body.num1);
var num2=parseFloat(req.body.num2);
var result = num1/(num2*num2);
res.send("The BMI calculated is  " + result);
});

app.listen(3000,function(){
console.log("Server is running on port 3000");
});

// const express = require("express");
// const bodyParser = require("body-parser");
// const app= express();
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(res,req){
// res.sendFile(__dirname+"/index.html");
// });

// app.post("/",function(req,res){
// var num1= Number(req.body.num1);
// var num2 = Number(req.body.num2);
// var result= num1+num2;

// res.send("The BMI Calculated is "+result);

// });

// app.listen(3000,function(){
//     console.log("Server is running on port 3000");
// });