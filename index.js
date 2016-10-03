/*
My index.js file
*/
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.listen(3000, function () {
  console.log('Yogis portfolio site app listening on port 3000!');
});