var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){
  socket.write(strftime('%Y-%m-%d %H:%M') + "\n");
  socket.end();
});

server.listen(process.argv[2]);
