const http = require("http");
const fs = require("fs");

var handler = function(req,res){
    if(req.url == "/home.html"){
        fs.readFile("home.html",function(err,data){
            res.writeHead(200, {'Content-type':'text/html'})
            res.write(data); 
            res.end("");
        })
    }else if(req.url == "/index.html"){
        fs.readFile("index.html",function(err,data){
            res.writeHead(200, {'Content-type':'text/html'})
            res.write(data); 
            res.end("");
        })
    }else if(req.url == "/about.html"){
        fs.readFile("about.html",function(err,data){
            res.writeHead(200, {'Content-type':'text/html'})
            res.write(data); 
            res.end("");
        })
    }else{
        res.writeHead(404);
        res.write("Error");
        res.end();
    }
};

const srv = http.createServer(handler);
srv.listen(8080);