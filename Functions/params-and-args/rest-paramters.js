//Rest parameters allow you to represent an indefinite number of arguments as an array. 
//They are useful when you don't know how many arguments will be passed to the function.

function printAll(...elements){
    console.log(elements);
}
printAll(1,2,3,4,5,6); // op: (6) [1, 2, 3, 4, 5, 6]
printAll(1,2,3); // op: (3) [1, 2, 3]