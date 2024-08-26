//Variables declared within a function are in the local scope and accessible only within that function
function local(){
    var localVaribale="In local";
    console.log(localVaribale) //In local
}
local(); 
console.log(localVaribale); //Uncaught ReferenceError ReferenceError: localVaribale is not defined