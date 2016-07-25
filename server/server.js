var express = require('express');
var index = require('./routes/index');
var bodyParser = require('body-parser');
var app=express();

app.use(bodyParser.json());
app.use(express.static('server/public'))
app.use('/', index);

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("listening on port", port);
});
