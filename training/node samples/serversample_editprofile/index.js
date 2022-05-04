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

app.post('/userfetch',function(req,res)
{
    con.connect(function(err)
    {
        if(err)throw(err)
        
        con.query("SELECT * from tblUsers where id=1", function (err, result, fields) 
        {
            if (err) throw err;
            console.log(result);

          res.send(result);
        });
    });
});

app.post('/userupdate',function(req,res)
{
    con.connect(function(err)
    {
        if(err)throw(err)
        
        con.query("UPDATE  tblUsers SET id ='6',txtUserName ='Chithra',txtPassword='amma',dtCreatedon='2021/04/06',dtUpdatedon='2022/04/20',isregistrd='1';", function (err, result, fields) 
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