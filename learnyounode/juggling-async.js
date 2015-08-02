var http = require('http');

var results = {};

// http.get(url1, function(res){
//   var output = '';
//   res.setEncoding('utf8');
//   res.on('data', function(data){
//     output += data;
//   });
//   res.on('end', function(){
//     results.push(output);
//     http.get(url2, function(res){
//       res.setEncoding('utf8');
//       res.on('data', function(data){
//         output2 += data;
//       });
//       res.on('end', function(){
//         http.get(url3, function(res){
//           res.setEncoding('utf8');
//           res.on('data', function(data){
//             output3 += data;
//           });
//           res.on('end', function(){
//             console.log(results[0]);
//             console.log(output2);
//             console.log(output3);
//           });
//         });
//       });
//     });
//   });
// });

function httpGet(i) {
  http.get(process.argv[i+2], function(response){
    var output = '';
    response.setEncoding('utf8');
    response.on('data', function(data){
      output += data;
    });
    response.on('end', function(){
      results[i] = output;
    });
  });  
}
for (var i = 0; i < 3; i++) {
  httpGet(i);

}

console.log(results[0]);


