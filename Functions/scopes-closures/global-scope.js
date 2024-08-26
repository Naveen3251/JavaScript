//Variables declared outside any function are in the global scope and accessible anywhere.

var globalVar="Hi there!";
function accesInsideFunction(){
    console.log(globalVar);
}
console.log(globalVar);
accesInsideFunction()  //ops 2 Hi there!