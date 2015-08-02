var mod = require('./modular.js');

mod(process.argv[2], process.argv[3], function(err, data){
  data.forEach(function(e){ console.log(e) });
});
