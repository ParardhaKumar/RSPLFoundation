var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
  res.render("index");
})

app.get("/donate", function(req, res){
  res.render("donate")
})

app.get("*", function(req, res){
  res.render("404");
})

app.listen(process.env.PORT || 9999 , function(){
  console.log("Server Running Successfully!");
})
