var People = (function(){
  var instance;
  function init(name, age){
    //define private methods and properties
    //do something
    
    return {
      //define public methods and properties
      name: name,
      age: age,
      sayName: function(){
        console.log(name);
      }
      
    };
  }
  return {
    createPeople: function(name, age){
      if(!instance){
        instance = init(name, age);
      }
      return instance;
    }
  };
})();

var obj1 = People.createPeople('小明', 20);
var obj2 = People.createPeople('小刚', 21);