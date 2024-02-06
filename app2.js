const http = require("http");
const fs = require("fs");
const qs = require("querystring");


var handler = function(req, res){
    if(req.url == "/reg.html"){
        fs.readFile("reg.html", function(err,data){   
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data); 
            res.end();
        })
    }else if(req.url.indexOf('reg') > -1){
        if(req.method === 'POST'){
            let reqData = '';

            req.on('data', function(data) {
                reqData += data;
            })

            req.on('end', function (){
                let formData = qs.parse(reqData);
                const password = formData.password || '';
                if (password.length < 8) {
                    res.write(`<h1>Error password is less than 8 characters</h1>`);
                } else {
                    res.write(`<h1>Registration success</h1>`)
                }
                res.end();
            })
        }

    }
        }
const server = http.createServer(handler);

server.listen(8080);
