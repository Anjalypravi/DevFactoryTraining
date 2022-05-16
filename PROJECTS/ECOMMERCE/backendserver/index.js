var mysql = require("mysql");

const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
const cors = require("cors");
app.use(cors());
const jwt = require("jsonwebtoken");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testdb",
});

function verifyToken(req, res, next) {
  // req.header.token;
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    //"Bearer 5015885085484809959059"
    const bearerToken = bearerHeader.split(" ")[1];
    jwt.verify(bearerToken, "secretkey", (err, authData) => {
      if (err) res.sendStatus(403);
      else {
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
  // jwt.verify(true next else 403)
}
app.post("/uservalidation", (req, res) => {
  var uname = req.body.username;
  var passwrd = req.body.password;
  var sql =
    "select id,txtUserName from tblUsers where txtUserName ='" +
    uname +
    "' and txtPassword ='" +
    passwrd +
    "'";
  con.query(sql, function (err, result) {
    if (result.length > 0) {
      const usr = result[0];
      
      jwt.sign({ user: usr }, "secretkey", (err, token) => {
        if (err) res.send(err);
        else res.json({ token: token });
        console.log(token);
      });
    } else {
      res.json({ token: "" });
      
    }
    
  });
});
app.listen(port, () => {
  console.log("server is running ");
});
