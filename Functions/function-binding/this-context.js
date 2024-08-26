
/*the greet function is called as a method of the person object. The value of this inside 
the greet function refers to the person object, so this.name correctly points to "Naveen".*/

const person={
    name:"Naveen",
    greet:function(){
        console.log(this.name) //Naveen  //nothing it is person.name
    }
}
person.greet();
console.log(person.name) //op Naveen
