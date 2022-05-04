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

app.post('/countryfetch',function(req,res){
    con.connect(function(err){
        if(err)throw(err)
        con.query("SELECT  id,txtCode,txtName FROM tblCountry", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
});

app.use(express.json());
app.post('/statefetch',function(req,res){
    var a=req.body.id;
    con.connect(function(err){
        if(err)throw(err)
        con.query("SELECT  id,refCountryId,txtName FROM tblState", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });   
    
});