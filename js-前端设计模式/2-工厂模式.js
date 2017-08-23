function createPerson(opts){
  var person = {
    name: opts.name || 'hunger'
  };
  person.sayName =  function(){
    console.log(this.name);
  }
  return person;
}

var person1 = createPerson({name: '小明'});
var person2 = createPerson({name: '小刚'});