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

app.post('/addproduct',function(req,res)
{
    con.connect(function(err)
    {
        if(err)throw(err)
        
        con.query("INSERT INTO tblOdrHdr(iOrdNo,dtOrd,refUserId,txtStatus,dtCreatedon,dtUpdatedon)VALUES ('1235','2022-01-24','1','Delivered','2021-07-04','2022-01-16')", function (err, result, fields) 
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