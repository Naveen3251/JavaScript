//Default parameters allow you to specify default values for function parameters.
function greet(name='Guest'){
    console.log(`Hello ${name}`);
}
//not passing
greet();  //op: Hello Guest
//passing the name
greet("Naveen") //op: Hello Naveen