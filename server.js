const express = require('express');
//const path = require('path');
const app = express();

console.log('this the server b')

//start that server
app.listen(3000, function(){
  console.log('streets is listenin')
})

app.get('/', function(req, res) {
  console.log('AYE THE HOME');
  res.sendFile(__dirname + '/src/index.html');
})

app.get('/api', function(req, res) {
  console.log('AYE THE API MY GUY');
  res.send({
    "bars": "there are none",
    "tricks": "there are many"
  })
})
