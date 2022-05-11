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

app.post('/employeetable', function (req, res) {

    var y = "CREATE TABLE tblemployee ( Emp_id int NOT NULL AUTO_INCREMENT,firstName	varchar(50),lastName varchar(50), email varchar(100),age int,jobTitle	varchar(50),empstartrddon	datetime, PRIMARY KEY (Emp_id));"
     
    con.query(y, function (err, result, fields) {
        if (err) {

            throw err;
        }else
        {
            console.log(result);
            res.send(result);

        }
    });
});
app.post('/insertemployeetable', function (req, res) {

    var z = "insert TABLE tblemployee ( Emp_id,firstName,lastName,email,age,jobTitle,empstartrddon) VALUES 6','Sales rep','2011/05/11'),('106','Jennings','Pamela','jpamela@gmail.com','33','Sales rep','2011/06/11'),('107','Firelli','Julie','fjulie@gmail.com','35','Sales rep','2011/07/11'),('108','Peterson','George','pgeorge@gmail.com','34','Marketing','2011/08/11'),('109','Hemandez','Lesile','hlesile@gmail.com','0','Marketing','2011/09/11'),('110','Tseng','Mary','tmary@gmail.com','30','Marketing','2011/10/11')as val);"
 
    con.query(z, function (err, result, fields) {
        if (err) {

            throw err;
        }else
        {
            console.log(result);
            res.send(result);

        }
    });
});
app.listen(port, () => {
    console.log(`Server is running`)
}
);
