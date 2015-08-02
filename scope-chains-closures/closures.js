function foo () {
  var bar;
  quux = 'yo';

  function zip () {
    var quux = 'hello'; 
    bar = true;
  }

  return zip;
}
