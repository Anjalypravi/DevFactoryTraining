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

app.post('/uservalidation',function(req,res)
{
    con.connect(function(err)
    {
        if(err)throw(err)
        var a = "SELECT id,isregistrd from tblUsers where txtUserName='Anjaly' and txtPassword ='itzMe'";
        con.query( a, function (err, result, fields) 
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