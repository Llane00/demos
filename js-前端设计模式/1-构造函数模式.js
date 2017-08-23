function Person(name, age){
  this.name = name;
  this.age = age;
};
Person.prototype = {
  sayName: function(){
    return this.name;
  },
  run: function(){
    console.log('run');
  }
};
var student = new Person('小明', 30);
console.log(student.sayName());
student.run();