var mysql = require("mysql");
const express = require("express");
const { Console } = require("console");
const app = express();
const port = 8000;
app.use(express.json());
const cors=require('cors');
const { VARCHAR } = require("mysql/lib/protocol/constants/types");
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


app.post('/userfetch', function (req, res) {
        
  var y = "select tu.id,tu.txtUserName from tblusers tu join tbluserroles tr on tu.refUserRole=tr.id where tr.txtUserRole='EMPLOYEE'; ";
  con.query(y, function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
    res.send(result);
  });
});

app.post('/uservalidation', function (req, res) {
  var a = req.body.txtUserName;
  var b = req.body.txtPassword;


  var sql =
    "SELECT IFNULL((SELECT  refUserRole from tblUsers where txtUserName ='" +
    a +
    "' AND txtPassword ='" +
    b +
    "'),0) AS VAL";
    con.query(sql, function (err, result) {
        if (err) {
            throw err;
          } else {
            console.log(result);
            res.send(result);
          }
        });
      
});


app.post('/usertaskfetch', function (req, res) {
    var a = req.body.id;
    var sql = "select txtTitle,txtStatus from tblTask where refAssignee='" + a + "'";
    console.log(a);
    con.query(sql, function (err, result) {
      if (err) {
          throw err;
      }else
      {
      res.send(result);
     console.log(result);
      }
    });
  });
app.post('/projectfetch', function (req, res) {
    
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
    
    var sql = "SELECT txtTitle FROM tblepic;";
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
    console.log("test")
    //var c = req.body.id;
    var d = req.body.txtTitle;
var e =req.body.txtDescription;
var f =req.body.txtStatus;
//var g =req.body.dtEstStartDte;
//var h =req.body.dtEstEndtDte;
//var i =req.body.dtActStartDte;
//var j =req.body.dtActEndtDte;
var k =1;
var l =req.body.refassignee;
    var sql = "INSERT into tblepic (txtTitle,txtDescription,txtStatus,refProjectId,refassignee)values('"+d+"','"+e+"','"+f+"','"+k+"','"+l+"')"; 
    con.query(sql, function (err, result, fields) {
      if (err) {
        throw err;
      } else {
        console.log(result);
      }
    });
  });

  app.post("/updateEpic", function (req, res) {
    var d = req.body.txtTitle;
    var e =req.body.txtDescription;
    var m = req.body.txtStatus;
    var n = req.body.refassignee;
    var o = req.body.id;
    var k=1;
    var sql ="update tblepic set txtTitle='"+d+"', txtDescription='"+e+"',txtStatus='"+m+"',refassignee='"+n+"',refProjectId='"+k+"' where id='"+o+"'";
    con.query(sql, function (err, result, fields) {
      if (err) {
        throw err;
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });
  
  app.post('/epicfetch', function (req, res) {
    
    var sql = "SELECT id,txtTitle,txtStatus,refProjectId from tblepic";
    con.query(sql, function (err, result) {
      if (err) {
          throw err;
      }else
      {
      res.send(result);
      console.log(result);
      }
    });
  });

  app.post('/sprintfetch', function (req, res) {

    
    var sql = "SELECT txtSprintName from tblsprint";
    con.query(sql, function (err, result) {
      if (err) {
          throw err;

      }else
      {
      res.send(result);
      console.log(result);
      }
    });
  });
  app.post("/Taskinsert", function (req, res) {
    console.log("test")
    //var c = req.body.id;
    var d = req.body.txtTitle;
var e =req.body.txtDescriotion;
var f =req.body.txtStatus;

var k =3;
var l =req.body.refassignee;
var s=2;
var hrs=req.body.EstHours;
    var sql = "INSERT into tbltask (txtTitle,txtDescriotion,txtStatus,refEpicId,refassignee,refSprintId,EstHours)values('"+d+"','"+e+"','"+f+"','"+k+"','"+l+"','"+s+"','"+hrs+"')"; 
    con.query(sql, function (err, result, fields) {
      if (err) {
        throw err;
      } else {
        console.log(result);
      }
    });
  });

  app.post("/updateTask", function (req, res) {
    var d = req.body.txtTitle;
    var e =req.body.txtDescriotion;
    var m = req.body.txtStatus;
   
    var k =3;
    var n = req.body.refassignee;
     var l =req.body.refassignee;
     var s=2;
     var hrs=req.body.EstHours;
    var sql ="update tbltask set txtTitle='"+d+"', txtDescriotion='"+e+"',txtStatus='"+m+"',refEpicId ='"+k+"',refassignee='"+n+"',refSprintId='"+s+"',EstHours='"+hrs+"' where id=11";
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
