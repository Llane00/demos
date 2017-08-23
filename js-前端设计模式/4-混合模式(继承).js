var Person = function(name, age){
  this.name = name;
  this.age = age;
};
Person.prototype.sayName = function(){
  console.log(this.name);
};
var Student = function(name, age, score){
  Person.call(this, name, age);
  this.score = score;
};
Student.prototype.sayScore = function(){
  console.log(this.score);
};

// Student.prototype = Object.create(Person.prototype); //es6写法
Student.prototype = create(Person.prototype); //兼容写法

function create(parentObj){
  function F(){};
  F.prototype = parentObj;
  return new F();
};

var student = new Student('小明', 20, 90);
console.log(student);

