var http = require('http');

//create a server object:
http.createServer(function (req, res) {
 var a= 5;
  res.write('result ='+ a+''); //write a response to the client
  res.end(); //end the response
}).listen(3000); 
