const { appendFile } = require('fs');
var mysql = require('mysql');

const express = require('express');
const app = express();
const port = 8000;
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
    });

    app.post('/userinsert',function(req,res){
        //var a=req.body.id;
            
                  var sql = "INSERT INTO tblUsers(id, txtUserName,txtPassword,refUserRole)VALUES (5,'SMITHA','SMI123',4);
    con.query(sql, function (err, result, fields) 
     {
                if (err) throw err;
                console.log(result);
                res.send(result);
     });
    
            
    });   
        
    app.listen(port, () => 
    {
        console.log(`Example app listening on port ${port}`)
      });