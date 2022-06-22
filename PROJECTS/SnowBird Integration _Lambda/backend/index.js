const express = require('express');
const app = express();
var mysql = require('mysql');
const cors = require('cors');
// const react = require('react');
//const { useSyncExternalStore } = require('react/cjs/react.production.min');
app.use(cors());
// var jsJoda = require("@js-joda/core");
// require("@js-joda/timezone");
var { ZoneId, ZonedDateTime } = require("@js-joda/core");
require("@js-joda/timezone");

app.use(express.json());
var con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password1234",
    database: "project"

  });
con.connect(function (err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Connected");
  }
})
/**********************************  BOARD PAGE  ************************************************************/

/*All Users fetch (display all users on top)- Board Page*/

app.post('/userfetch', function (req, res) {
  var sql = "select tu.txtUserName,tu.id from tblusers tu join tbluserroles tr on tu.refUserRole=tr.id where tr.txtUserRole='Employee';;"
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

/* User task fetch of a selected user - Board Page*/

app.post('/usertaskfetch', function (req, res) {
  var uid = req.body.userId;
  var sql = "select id,txtTitle,txtStatus from tbltasks where refAssignee='" + uid + "';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})
// app.post('/usertaskfetch', function (req, res) {
//   var a = req.body.id;
//   var sql = "select txtTitle,txtStatus from tblTask where refAssignee='" + a + "'";
//   console.log(a);
//   con.query(sql, function (err, result) {
//     if (err) {
//         throw err;
//     }else
//     {
//     res.send(result);
//    console.log(result);
//     }
//   });
// });

app.post('/logtable',function(req,res){
  var refTaskid=req.body.taskid;
  var txtStatus=req.body.status;
  var refUser=req.body.user;
  var dtLoggedOn=req.body.logon;
  var sql="insert into tbllogs(refTaskid,txtStatus,refUser,dtLoggedOn)values('"+refTaskid+"','"+txtStatus+"','"+refUser+"','"+dtLoggedOn+"');"
  con.query(sql,function(err,result){
    if (err)throw err;
    res.send(result);
    console.log(sql)
  })
})
/***************************************PROJECT PAGE***********************************************************************************************/
/* API to fetch project details -Project Page  */

app.post('/projectdetailfetch', function (req, res) {

  var pownerid = req.body.poid;
  console.log(pownerid);
  var project = [];
  var epic = [];
  var task = [];
  //var sql = "select tp.id,tp.txtName AS projectName,te.refAssignee as assignee,te.txtTitle AS Epic,te.id as Epicid ,te.txtStatus as Epicstatus,tt.txtTitle AS Task,tt.txtStatus AS taskstatus,tu.txtUserName as Projectowner FROM tblprojects tp JOIN tblepic te ON tp.id = te.refProjectId JOIN tbltasks tt ON tt.refEpicid = te.refProjectId join tblusers tu on te.refAssignee=tu.id WHERE tp.refProjectOwner = '3';";

  con.query("SELECT  tp.id,tp.txtName,tu.txtUserName FROM tblprojects tp join tblusers tu on tp.refProjectOwner=tu.id where refProjectOwner ='" + pownerid + "';", function (err, result) {
    //console.log(result);
    project = [...result];

  })
  con.query("select id,refProjectId,refAssignee,txtTitle,txtStatus from tblepic;", function (err, result) {
    //console.log(result);

    epic = [...result];


  })
  con.query("select id,refEpicid,txtTitle,txtStatus from tbltasks;", function (err, result) {
    task = [...result];
    //})
    taskobj = {};
    epicobj = {};
    projectobj = {};
    task.forEach(element => {
      if (taskobj[element.refEpicid] == undefined)
        taskobj[element.refEpicid] = [element];
      else {
        temparray = taskobj[element.refEpicid];
        temparray.push(element)
      }
    });

    epic.forEach(element => {
      if (epicobj[element.refProjectId] == undefined)
        epicobj[element.refProjectId] = [element];


      else {
        temparray1 = epicobj[element.refProjectId];
        temparray1.push(element)
      }
      element["task"] = taskobj[element.id]
    });

    project.forEach(element => {
      if (projectobj[element.refProjectId] == undefined)
        projectobj[element.refProjectId] = [element];
      else {
        temparray = projectobj[element.refEpicid];
        temparray.push(element)
      }
      element["Epic"] = epicobj[element.id]
    });

    console.log(JSON.stringify(project));
    res.send(sql);

  })

})



/**************************************************ADD PROJECT PAGE***************************************************************************************/
/*API to insert project details - Add Project Page */

app.post('/projectinsert', function (req, res) {
  var txtName = req.body.name;
  var txtType = req.body.type;
  var refProjectOwner = req.body.owner;
  var desc=req.body.desc;
  // var dtEstStartDate = req.body.stdate;
  // var dtEstEndDate = req.body.endate;

  var sql = "insert into tblprojects(txtName,txtType,refProjectOwner,txtDescription)values('" + txtName + "','" + txtType + "','" + refProjectOwner + "','"+desc+"');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    else
      //res.send(JSON.stringify(req));
      res.send(result);
    console.log(sql);
  })
})
/* API to fetch Managers- populate dropdown list  */

app.post('/ownerfetch', function (req, res) {

  var sql = "select tu.txtUserName,tu.id from tblusers tu join tbluserroles tr on tu.refUserRole=tr.id where txtUserRole='Manager'"
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

/*API for project Update */
app.post('/projectUpdate', function (req, res) {

  var pname = req.body.prjctname;
  var ptype = req.body.prjcttype;
  var owner = req.body.refowner;
  var prjctid = req.body.id;
  var desc=req.body.desc;
  var sql = "update tblprojects set txtName='" + pname + "', txtType='" + ptype + "',refProjectOwner='" + owner + "',txtDescription='"+desc+"' where id='" + prjctid + "' ;;"
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

/*API to dispaly the details pf selected project*/
app.post('/selectedproject', function (req, res) {
  var id = req.body.prjctId;
  var sql = "SELECT tb.txtName,tb.txtType,tb.refProjectOwner ,tu.txtUserName from tblprojects tb join tblusers tu on tb.refProjectOwner=tu.id where tb.id='" + id + "';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})


/**************************************************************************************************************************************************************************** */

app.post('/projectdetailfetchNew', function (req, res) {

  var pownerid = 3;
  const project = new Promise((resolve, reject) => {
    con.query(
      "SELECT  tp.id,tp.txtName,tu.txtUserName FROM tblprojects tp join tblusers tu on tp.refProjectOwner=tu.id where refProjectOwner ='" + pownerid + "'",
      function (err, result) {
        if (err) resolve(err);
        resolve(result);
      }
    );
  });


  const epic = new Promise((resolve, reject) => {
    con.query(
      "select id,refProjectId,refAssignee,txtTitle,txtStatus from tblepic;",
      function (err, result) {
        if (err) resolve(err);
        resolve(result);
      }
    );
  });

  const task = new Promise((resolve, reject) => {
    con.query(
      "select id,refEpicid,txtTitle,txtStatus from tbltasks",
      function (err, result) {
        if (err) resolve(err);
        resolve(result);
      }
    );
  });

  Promise.all([project, epic, task]).then((values) => {
    var project = values[0];
    var epic = values[1];
    var task = values[2];

    var taskobj = {};
    for (element of task) {
      if (taskobj[element.refEpicid] == undefined) {
        taskobj[element.refEpicid] = [element];
      } else {
        var temp = taskobj[element.refEpicid];
        taskobj[element.refEpicid] = [...temp, element];
      }
    }
    for (element of epic) {
      if (taskobj[element.id] == undefined) element.task = [];
      else {
        element.task = taskobj[element.id];
      }
    }

    var epicobj = {};
    for (element of epic) {
      if (epicobj[element.refProjectId] == undefined) {
        epicobj[element.refProjectId] = [element];
      } else {
        var temp = epicobj[element.refProjectId];
        epicobj[element.refProjectId] = [...temp, element];
      }
    }
    for (element of project) {
      if (epicobj[element.id] == undefined) element.epic = [];
      else {
        element.epic = epicobj[element.id];
      }
    }
    console.log(JSON.stringify(project));
    res.send(project);
  });

})
/****************************************************Sprint ****************************************/
app.post('/InsertSprint', function (req, res) {
  var Sname = req.body.txtSprintname
  var Stdate = req.body.stdate
  var Enddate = req.body.enddate
  var Acstdate = req.body.acstdate
  var Acenddate = req.body.acenddate

  //var sql1 = "Select id from tblusers where txtUsername='" + uname + "';"
  var sql =
    "Insert into tblsprints(txtSprintname,dtEststartdate,dtestenddate) values('" + Sname + "' ,'" + Stdate + "','" + Enddate + "')"

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
    }
  })
})


app.post('/fetchuser', function (req, res) {
  var sql = ' select id,txtUserName,txtPassword from tblusers'

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
    }
  })
})


app.post('/sprintdetails', function (req, res) {
  var Sid = req.body.Id
  var sql =
    "select txtSprintname,Description,txtUsername,Status,dtActstartdate,dtActenddate from tblsprints where Id='" +
    Sid +
    "';"

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
    }
  })
})
/*****************************************  ADD USER  **************************************************************** */
/* API for fetchUserRole-- populate dropdown*/

app.post('/userRolefetch', function (req, res) {
  var sql = "select id, txtUserRole from tbluserroles;"
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})


app.post('/projectload', function (req, res) {
  var pid = req.body.pid;
  var sql = "select tb.txtName,tb.txtType ,tu.txtUserName,tb.txtDescription from tblprojects tb join  tblusers tu on tb.refProjectOwner=tu.id  where tb.id='" + pid + "';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})


app.post('/insertuser', function (req, res) {
  var uname = req.body.username;
  var pass = req.body.password;
  var typ = req.body.type;
  var sql1 = "select id from tblusers where txtUserName='" + uname + "';"
  var sql2 = "insert into tblusers(txtUserName,txtPassword,refUserRole)values('" + uname + "','" + pass + "','" + typ + "');"
  con.query(sql1, function (err, result) {
    var a = result[0];
    if (a != undefined) {
      res.send("User already exist!!!");
    }
    else {
      //res.send("Ready to insert values into user "+uname);
      con.query(sql2, function (err, result) {
        if (err) throw err;
        res.send(result);
      })
    }
  });
})

app.post('/userupdatefetch', function (req, res) {
  usrid = req.body.id;
  var sql = "SELECT tu.txtUserName,tu.txtPassword,tr.txtUserRole,tu.refUserRole from tblusers tu join tbluserroles tr on tu.refUserRole=tr.id where tu.id='" + usrid + "';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

app.post('/userupdate', function (req, res) {
  //fetch id from users where username=req username

  var uname = req.body.username;
  var suname = req.body.suname;
  var pass = req.body.password;
  var ty = req.body.reftype;
  var uid = req.body.id;
  var sql1 = "select id from tblusers where txtUserName='" + suname + "';";
  console.log("uname" + suname);
  var sql2 = "update tblusers set txtPassword='" + pass + "',txtUserName='" + uname + "' ,refUserRole='" + ty + "'where id= '" + uid + "';";
  con.query(sql1, function (err, result) {


    if (result.length > 0) {

      if (result[0].id == req.body.id) {


        con.query(sql2, function (err, result1) {
          if (err) throw res.send(err);
          res.send(result1);
          //console.log(result1);
        })

      }

      else {

        res.send("Username duplicate");
      }
    }

  });
})
/*****************************************EPIC PAGE********************************************************************************** */
app.post('/userfetchforusers', function (req, res) {
  var sql = "select tu.txtUserName,tu.id ,tr.txtUserRole from tblusers tu join tbluserroles tr on tu.refUserRole=tr.id where tr.txtUserRole='Employee';;"
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  })
})

app.post("/Epiclistfetch", function (req, res) {
    
  var sql = "SELECT ep.txtTitle,ep.id FROM tblepic ep join tbltasks ta on refEpicid=ep.id";
  con.query(sql, function (err, result, fields) {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post('/epicfecth', function (req, res) {

  const Epic = new Promise((resolve, reject) => {
    var sql = "select te.id,te.refProjectId,te.txtTitle,te.txtStatus,tb.txtName from tblepic te join tblprojects tb where te.refProjectId=tb.id;"
    con.query(sql, function (err, result) {
      if (err) resolve(err);
      resolve(result);
      //res.send(result);
    }
    );
  });

  const Task = new Promise((resolve, reject) => {
    var sql = "select id,refEpicid,txtTitle,txtStatus from tbltasks;"
    con.query(sql, function (err, result) {
      if (err) resolve(err);
      resolve(result);
      //res.send(result);
    }
    );
  });

  Promise.all([Epic, Task]).then((values) => {
    var Epic = values[0];
    var Task = values[1];
    var Epicobj = {};
    var Taskobj = {};
    for (element of Task) {
      if (Taskobj[element.refEpicid] == undefined) {
        Taskobj[element.refEpicid] = [element];
      } else {
        var temp = Taskobj[element.refEpicid];
        Taskobj[element.refEpicid] = [...temp, element];
      }
      //res.send(Taskobj);
      //console.log(Taskobj);
    }

    for (element of Epic) {
      if (Epicobj[element.refProjectId] == undefined) {
        Epicobj[element.refProjectId] = [element];
      } else {
        var temp = Epicobj[element.refProjectId];
        Epicobj[element.refProjectId] = [...temp, element];
      }
      //res.send(Epicobj);
    }
    //console.log(Epicobj);
    for (element of Epic) {
      if (Taskobj[element.id] == undefined) element.Task = [];
      else {
        element.Task = Taskobj[element.id];
      }
    }
    //console.log(Epic);
    res.send(Epic);
  })

})


app.post("/updateEpic", function (req, res) {
  var d = req.body.txtTitle;
  var e =req.body.txtDescription;
  var m = req.body.txtStatus;
  var n = req.body.refassignee;
  var o = req.body.id;
  var k=1;
  var sql ="update tblepic set txtTitle='"+d+"', txtDescription='"+e+"',txtStatus='"+m+"',refAssignee='"+n+"',refProjectId='"+k+"' where id='"+o+"'";
  con.query(sql, function (err, result, fields) {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

/**************************************** Sprint Board *************************************************/


app.post('/sprintboardfetch', function (req, res) {
  var sql = " select distinct refSprintId from tbltask";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
    console.log(result);
  })

})


app.post('/sprintfetch', function (req, res) {
  var sql = "select distinct refSprintid from tbltasks;"
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
    console.log(result);
  })

})


app.post('/sprintfetch_task', function (req, res) {

    
  var sql = "select sp.txtSprintName,sp.id from tblsprints sp join tbltasks ta on refSprintid=sp.id;";
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


app.post('/fetchsprintlist', function (req, res) {
  var sql =
    ' select id,txtSprintName,dtActStartDate,dtActEndDate from tblsprints'

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
    }
  })
})
/**************************************** Attendance Page *********************************************/

app.post('/fetchstatus', function (req, res) {
  var id=req.body.id;
  var sql = "select txtstatus from tblattendance where refUserid='"+id+"' and id=(select max(id) from tblattendance where refUserid='"+id+"')group by refUserid;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
    console.log("current " + JSON.stringify(result));

  })
})

app.post('/insertstatus',function(req,res){

  var refuid=req.body.refid;
  var login_time=req.body.logintime;
  var status=req.body.status;
  var sql="insert into tblattendance (refUserid,txtstatus,txtdatetime) values('"+refuid+"','"+status+"','"+login_time+"');";
  con.query(sql,function(err,result){

    if (err) throw err;
    res.send(result);
    console.log("insertattendance" + JSON.stringify(result));
  })
 


})

/**********************************************************Timesheet****************************************************************** */

app.post('/timesheet_taskfetch',function(req,res){
  var userid=req.body.userid;
  var sql="select tu.txtUserName,te.txtDescription,te.txtStatus,DATE_FORMAT(te.dtActStartDate,'%Y-%m-%d %h %i %s %p')as startdate,date_format(te.dtActEndDate,'%Y-%m-%d %h %i %s %p')as enddate,te.EstHours,te.refAssignee from tbltasks te join tblusers tu on te.refAssignee=tu.id where refAssignee='"+userid+"';";
  con.query(sql,function(err,result){

    if (err) throw err;
    // res.send(result);
    console.log("task" + JSON.stringify(result));
    res.send(result);
       


    // console.log(dateTime);
  })

})
// app.post('/insertstatus_logout',function(req,res){

//   var refuid=req.body.refid;
//   var login_time=req.body.logintime;
//   var status=req.body.status;
//   var sql="insert into tblattendance (refUserid,txtstatus,txtdatetime) values('"+refuid+"','"+status+"','"+login_time+"');";
//   con.query(sql,function(err,result){

//     if (err) throw err;
//     res.send(result);
//     console.log("insertattendance" + JSON.stringify(result));
//   })
 


// })
// app.post('/updatestatus', function (req, res) {
//   var status = req.body.status;
//   console.log("status" + status);
//   var sql = "update tblattendance set txtStatus='" + status + "' where refUname=1;";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     res.send(result);
//     console.log("updated" + JSON.stringify(result));

//   })
// })


/*******************************Task************************************************ */
app.post('/fetchtask', function (req, res) {
  
  var sql ="select ta.id,ta.txtTitle,ta.txtStatus,ep.txtTitle as epicname,pr.txtName from ((tbltasks ta join tblepic ep on ta.refEpicid=ep.id)join tblprojects pr on pr.id=ep.refProjectId) order by ta.id asc;"
    

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
      console.log(result)
    }
  })
})

app.post('/fetchtask', function (req, res) {
  
  var sql ="select ta.id,ta.txtTitle,ta.txtStatus,ep.txtTitle as epicname,pr.txtName from ((tbltasks ta join tblepic ep on ta.refEpicid=ep.id)join tblprojects pr on pr.id=ep.refProjectId) order by ta.id asc;"
    

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
      console.log(result)
    }
  })
})
app.post('/taskdetails', function (req, res) {
  var tid = req.body.id;
  var sql =
    "select ta.txtTitle,ta.txtDescription,ta.txtStatus,ta.EstHours,tu.txtUserName from(tbltasks ta join tblusers tu on ta.refAssignee=tu.id)  where ta.id='"+tid+"';";

  con.query(sql, function (err, result) {
    if (err) throw err
    else {
      res.send(result)
    }
  })
})

app.post("/Taskinsert", function (req, res) {
  console.log("test")
  //var c = req.body.id;
  var d = req.body.txtTitle;
var e =req.body.txtDescriotion;
var f =req.body.txtStatus;

var k =req.body.refEpicid;
var l =req.body.refassignee;
var s=req.body.refSprintid;
var hrs=req.body.EstHours;
  var sql = "INSERT into tbltasks (txtTitle,txtDescription,txtStatus,refEpicid,refAssignee,refSprintid,EstHours)values('"+d+"','"+e+"','"+f+"','"+k+"','"+l+"','"+s+"','"+hrs+"')"; 
  con.query(sql, function (err, result, fields) {
    if (err) {
      throw err;
    } else {
      console.log(result);
    }
  });
});


/***********************************LOGIN****************************************************** */
app.post('/uservalidation', function (req, res) {
  var a = req.body.txtUserName;
  var b = req.body.txtPassword;


  var sql =
    "SELECT IFNULL((SELECT  refUserRole from tblusers where txtUserName ='" +
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
app.listen(8000, () => {
  console.log("Server is running");
})



