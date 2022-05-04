const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.post('/add', (req, res) => 
{
    var x =parseInt(req.body.a);
    var y =parseInt(req.body.b);
    var z = x+y;
  res.send( z+'');
  
})

app.post('/passfail', (req, res) => 
{
    var x =parseInt(req.body.a);
    var y =parseInt(req.body.b);
    var z = x+y;
  
    if (z > 5)
     {
        result = 'pass';
      } else {
        result = 'fail';
      }
  res.send( result+'');
  
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  