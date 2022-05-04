const { appendFile } = require('fs');
var mysql = require('mysql');

const express = require('express')
const app = express()
const port = 3000;
app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "prjdb"
});

con.connect(function(err)
    {
        if(err) 
        {
            console.log(err);
        }
        else{
            console.log("connected");
        }
    })
app.post('/userfetch',function(req,res)
{
            var sql = "SELECT txtUserName,txtPassword,refUserRole from tblUsers ";
        con.query( sql, function (err, result, fields) 
        {
            if (err) throw err;
            console.log(result);
             res.send(result);
        });
    });


    
  
 app.listen(port, () => 
 {
     console.log(`Server is running`)
   }
 );
 
    