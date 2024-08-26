// A method is a function associated with an object. 
//It is called using object.methodName().


const person={
    name:"Naveen",
    greet:function(){
        console.log(`Hello ${this.name}`);
    }
}
person.greet(); //Hello Naveen


