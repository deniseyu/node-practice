var fs = require('fs');
var ext = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, data) {
  var filtered = data.filter(function(item){ return item.indexOf(ext) !== -1 });
  filtered.forEach(function(e){ console.log(e) });  
});
