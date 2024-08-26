//Functions can return other functions, allowing for more dynamic and flexible code.

function x(){
    //returning the function itself
    return function y(){
        console.log("Say Hi !")
    }
}

//storing in returned func in other var
const storage=x();

console.log(storage) /*op: ƒ y(){
    console.log("Say Hi !")
}*/

//invoking the stored function
storage() //op: Say Hi !