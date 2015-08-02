var http = require('http');
var port = process.argv[2];
var map = require('through2-map');

var server = http.createServer(function(req, res){
  if (req.method !== 'POST') {
    return res.end('Only post requests');
  } else {
    req.pipe(map(function (data) {
      return data.toString().toUpperCase();
    })).pipe(res); 
  }
});

server.listen(port);
