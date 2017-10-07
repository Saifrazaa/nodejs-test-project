var http=require("http"),
express=require("express"),
os=require("os")
;
var app=express();
app.get("/",function(req,res){

res.end(" you are now using node js ");
console.log("you are using " +os.type()+" operating sytem");




});

http.createServer(app).listen(3000,"localhost");
