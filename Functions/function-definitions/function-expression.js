//the function is assigned to a variable. 

//Note : Function expressions are not hoisted, so they cannot be called before their definition.

const greeting=function(name){
    return `Helllo , ${name}`;
}
console.log(greeting("Naveen")); //Op: Helllo , Naveen