const express = require("express");

const app = express();

//homepage root
app.get("/", function(req,res){ //2. & 3.
    res.send("<h1>Hello, World!</h1>"); //3.
});  

app.get("/contact", function(req, res){
    res.send("Contact me at : @email.com");
});

app.get("/about", function(req, res){
    res.send("Hi, it's Preety");
});

app.get("/hobby", function(req, res){
    res.send("Hi, it's la la la");
}); 

app.listen(3000, function(){
    //1.
    console.log("Server started on port 3000");
});

//1. //specifying the location (localhost:3000)
//2. Hitting enter on the location, browser will go to that location, make request to get data back
//3. when request get made at home lovcation(/), callback function get triggered, send response to the browser 
//   and it get rendered