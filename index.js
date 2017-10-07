var http=require("http"),
express=require("express");

var app=express();
app.get("/",function(req,res){

res.end("airline is going on");





});
var h= http.createServer(app).listen(3000);
if(h)
{
  console.log("Node js server is working now go to browser and hit 'localhost:3000'");

}
else {
console.log("Server is not working");
}
