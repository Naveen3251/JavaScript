//An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is defined and executed immediately after it's created. 
//This pattern is useful for creating a new scope to encapsulate variables and avoid polluting the global namespace.
(function(){
    console.log("Immediately invoked")
})();

//Example use case

const counter=(function(){
    let count=0; //private var 
    //cant acces or modify directly outside the function
    return {
        //publc methods to acces outside the function
        increment:function(){
            count++;
            return count
        },
        decrement:function(){
            count--;
            return count;
        }
    }
})()
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.decrement());
/*Private Variable: The variable count is declared inside the IIFE and is not accessible from outside the IIFE.
Public Methods: The increment, decrement, and getCount functions are returned as an object from the IIFE, allowing controlled access to the count variable.
Encapsulation: The count variable is protected from being accessed or modified directly from outside the IIFE, 
ensuring it can only be manipulated through the provided methods.
*/

//example 2: api privacy

const api=(function(){
    let privateKey='cant outside the api';

    //private method to handle
    function privateMethod(){
       let c= privateKey.split('');
       console.log(c);
    }

    //public method to handle outside by user
    return {
        publicMethod:function(){
            privateMethod();
        }
    }
})()
api.publicMethod() // op: (20) ['c', 'a', 'n', 't', ' ', 'o', 'u', 't', 's', 'i', 'd', 'e', ' ', 't', 'h', 'e', ' ', 'a', 'p', 'i']
api.privateMethod()  //op:  api.privateMethod is not a function error
console.log(api.privateKey) //op: error

/*Encapsulation: privateVar and privateFunc are not accessible from outside the IIFE, ensuring that the internal details of the module are hidden.
Public API: Only the publicMethod is exposed, allowing controlled interaction with the module.*/