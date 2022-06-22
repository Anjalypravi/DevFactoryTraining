const mysqlvar = require('mysql')
var con = mysqlvar.createConnection(
  {
    host: "database-1.cjt1iucwrwtt.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "itzMeenu86*",
    database: "SnowBird"

  });con.connect(function (err) {
    if (err) {
      return callback(null, err);
    }
  })
 
exports.handler = (req, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  // let test1=JSON.parse(req.body);
  // return callback(null,req.body)
 
   
    let buff = new Buffer(req.body, 'base64');
    let text = buff.toString('ascii');
    let temp=JSON.parse(text);
    let pid=temp.pid;
   // return callback(null,pid);
    con.query("select tb.txtName,tb.txtType ,tu.txtUserName,tb.txtDescription from tblprojects tb join  tblusers tu on tb.refProjectOwner=tu.id  where tb.id='" + pid + "'", (err, result) => {
   
        return callback(null, result)
      })
 
};
