var fs = require('fs');
var path = require('path');

function lineFilter(dir, ext, callback) {
  var extension = '.' + ext;
  fs.readdir(dir, function(err, data){
    if (err) {
      callback(err);
    } else {
      var filteredList = data.filter(function(file){
        return path.extname(file) === extension;
      });
      callback(null, filteredList);
    }
  });
};

module.exports = lineFilter;
