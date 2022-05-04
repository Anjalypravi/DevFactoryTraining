const express = require('express')
const app = express()
const port = 3000

app.post('/add', (req, res) => {
    var a = 5;
    var b = 5;
    var c = a+b;
  res.send('sum='+ c+'');
})
app.post('/sub', (req, res) => {
    var a = 5;
    var b = 5;
    var c = a-b;
  res.send('sub='+ c+'');
  })
  app.post('/mul', (req, res) => {
    var a = 5;
    var b = 5;
    var c = a*b;
  res.send('mul='+ c+'');
  })
  app.post('/div', (req, res) => {
    var a = 5;
    var b = 5;
    var c = a/b;
  res.send('div='+ c+'');
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})