var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);

console.log(file.toString().split("\n").length - 1);
