const { appendFile } = require('fs');
var mysql = require('mysql');

const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testdb"
});

app.post('/productfetch',function(req,res)
{
    con.connect(function(err)
    {
        if(err)throw(err)
        
        con.query("SELECT  refOdrHdrId,refProductId,txtQnty,txtRate,txtAmnt FROM tblOdrChld where refOdrHdrId = 2;", function (err, result, fields) 
        {
            if (err) throw err;
            console.log(result);

          res.send(result);
        });
    });
});

app.post('/productupdate',function(req,res)
{
    con.connect(function(err)
    {
        if(err)throw(err)
        
        con.query(" UPDATE tblOdrChld  SET refOdrHdrId = '6',  refProductId = '123',txtQnty ='5',txtRate ='50',txtAmnt ='100'WHERE id = 1;", function (err, result, fields) 
        {
            if (err) throw err;
            console.log(result);

          res.send(result);
        });
    });
});


app.listen(port, () => 
{
    console.log("server is running ")
  });

  
 