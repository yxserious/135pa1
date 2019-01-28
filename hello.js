#!/usr/bin/env nodejs
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('/server_pages/index.html', function(err,data){
  res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
  res.end();
}).listen(8080, '104.248.176.120');
console.log('Server running at http://104.248.176.120:8080/');
