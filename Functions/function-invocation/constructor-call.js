//When a function is called with the new keyword, it acts as a constructor and creates a new object.
function Person(name){
    this.name=name;
}
const person=new Person("Naveen");
console.log(person.name);