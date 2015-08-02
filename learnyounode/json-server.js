var http = require('http');
var port = process.argv[2];
var url = require('url');

var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });

  var parsedURI = url.parse(req.url, true);
  var rawDate = parsedURI.query.iso;
  var data;

  if (parsedURI.pathname === '/api/parsetime') {
    var date = new Date(rawDate);
    data = { 
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }
  } else if (parsedURI.pathname === '/api/unixtime') {
    data = {
      'unixtime': Date.parse(rawDate)
    }
  }
  res.end(JSON.stringify(data));
});

server.listen(Number(port));
