//Function declarations are hoisted, meaning they can be called before their actual declaration in the code.

//eg 1: traditional function
console.log(greet('name')); //op: name
function greet(name){
    return name;
}

//eg2: arrow function hoisiting  --> not possible
//console.log(arrow("nk"))  // op: Uncaught ReferenceError ReferenceError: Cannot access 'arrow' before initialization
const arrow=(kumar)=>{
    return kumar;
}

//eg3: function expression hoisting --> not possible
console.log(gop("lol"));  //op: Uncaught ReferenceError ReferenceError: Cannot access 'gop' before initialization
const gop=function(name){
    return name;
}

