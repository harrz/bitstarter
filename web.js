var express = require('express');
var app = express.createServer(express.logger());
var htmlFile = "index.html";
var fs = require('fs');


fs.readFile(htmlFile,'utf8', function (err,data) {  if (err) {     return console.log(err); } output = data; });

app.get('/', function(request, response) {

    response.send(output);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
