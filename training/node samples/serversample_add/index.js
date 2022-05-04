var http = require('http');
http.createServer(function (req,res)
{
    var a=5;
    var b=5;
    var c=a+b;
    res.write('sum ='+ c+'')
    res.end()
    }) .listen(8080)