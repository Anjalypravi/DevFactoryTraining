const { appendFile } = require('fs');
var mysql = require('mysql');

const express = require('express');
const { Console } = require('console');
const app = express();
const port = 3000;
app.use(express.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "prjdb"
});

con.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected");
    }
});
app.post('/userfetch', function (req, res) {

    var y = "SELECT txtUserName,txtPassword,refUserRole from tblUsers ";
    con.query(y, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/uservalidation', function (req, res) {
    console.log('hi');
    var a = req.body.Name;
    var b = req.body.Password;
    var sql = "SELECT IFNULL((SELECT  refUserRole from tblUsers where txtUserName ='" + a + "' AND txtPassword ='" + b + "'),'Not an Existing User') AS VAL" ;
    con.query(sql, function (err, result, fields) {

        if (err) {

            throw err;
        }else
        {
            console.log(result);
            res.send(result);

        }
    });
});

app.post('/userinsert', function (req, res) {
    var a = req.body.Name;
    var sql = "SELECT IFNULL((SELECT  id from tblUsers where txtUserName ='" + a + "'),'Not an Existing User') AS VAL" ;
    con.query(sql, function (err, result, fields) {
        var m=result[0];
    var b1 = req.body.txtUserName;
    var c1 = req.body.txtPassword;
    var d1 = req.body.refUserRole;
    var z = "INSERT INTO tblusers(txtUserName,txtPassword,refUserRole) values ('"+ b1+"','"+c1+"','"+d1+"')";
    if (m= undefined)
    {
    con.query(z, function (err, result, fields)
     {
        if (err) {

            throw err;
        }else
        {
            console.log(result);
            res.send(result);

        }
    
    });

}
});
app.listen(port, () => {
    console.log(`Server is running`)
}
);
});