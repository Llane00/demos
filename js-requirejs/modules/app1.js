define('app1',['module','exports'], function(module, exports) {
  exports.name = 'hi',

  module.exports.run = function(){
    alert("run!!!!!!!")
  }
  
});