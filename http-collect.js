var http = require('http');

http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  var output = '';

  response.on('data', function(data){
    output += data;
  });

  response.on('end', function(data){
    console.log(output.length);
    console.log(output);
  });
});
