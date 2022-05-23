var mysql = require("mysql");
const express = require("express");
const { Console } = require("console");
const app = express();
const port = 8000;
app.use(express.json());
const cors=require('cors');
app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "prjdb",
});

con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});
app.post("/userfetch", function (req, res) {
  var y = "SELECT txtUserName,txtPassword,refUserRole from tblUsers ";
  con.query(y, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post('/uservalidation', function (req, res) {
  var a = req.body.txtUserName;
  var b = req.body.txtPassword;
console.log(a);
console.log(b);
  var sql =
    "SELECT IFNULL((SELECT  refUserRole from tblUsers where txtUserName ='" +
    a +
    "' AND txtPassword ='" +
    b +
    "'),'Not an Existing User') AS VAL";
    con.query(sql, function (err, result) {
        if (err) {
            throw err;
          } else {
            console.log(result);
            res.send(result);
          }
        });
      
});

app.post("/projectfetch", function (req, res) {
    
  var sql = "SELECT  txtName,txtType,refProjectOwner from  tblprojects";
  con.query(sql, function (err, result, fields) {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/Epiclistfetch", function (req, res) {
    
    var sql = "SELECT id,txtTitle,txtDescription,txtStatus FROM tblepic;";
    con.query(sql, function (err, result, fields) {
      if (err) {
        throw err;
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });
  
  app.post("/Epicinsert", function (req, res) {
    var c = req.body.id;
    var d = req.body.txtTitle;
var e =req.body.txtDescription;
var f =req.body.txtStatus;
var g =req.body.dtEstStartDte;
var h =req.body.dtEstEndtDte;
var i =req.body.dtActStartDte;
var j =req.body.dtActEndtDte;
var k =req.body.refProjectId;
var l =req.body.refassignee;
    var sql = "INSERT into tblepic (id,txtTitle,txtDescription,txtStatus,dtEstStartDte,dtEstEndtDte,dtActStartDte,dtActEndtDte,refProjectId,refassignee)values('"+c+"','"+d+"','"+e+"','"+f+"','"+g+"':'"+h+"','"+i+"','"+j+"','"+k+"','"+l+"')"; 
    con.query(sql, function (err, result, fields) {
      if (err) {
        throw err;
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });

  app.post("/updateEpic", function (req, res) {
    var m = req.body.txtStatus;
    var n = req.body.refassignee;
    var o=req.body.id;
  
    var sql ="update tblepic set txtStatus='"+m+"',refassignee='"+n+"'where id='"+o+"'";
    con.query(sql, function (err, result, fields) {
      if (err) {
        throw err;
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });
  

app.listen(
  port,
  () => {
    console.log(`Server is running`);
  }
  //);
  //});
);
