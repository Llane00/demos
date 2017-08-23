var Person = (function(){
  var name = '小明';
  function sayName(){
    console.log(name);
  }
  return {
    name: name,
    sayName: sayName
  }
})();

console.log(Person.name);
Person.sayName();