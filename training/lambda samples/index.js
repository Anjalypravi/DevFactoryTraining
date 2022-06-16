const mysql = require("mysql");
var con = mysql.createConnection({
  host: "database-1.cjt1iucwrwtt.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "itzMeenu86*",
  database: "SnowBird",
});

con.connect(function (err) {
    if (err) {
      return callback(null, err);
    }
  })
 
