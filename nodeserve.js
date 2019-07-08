const http = require("http");
const server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    res.write("<h1>欢迎访问node服务器...</h1>");
    res.write("<h1>hello node.js server...</h1>");
    res.end();
});
server.listen(3000)