/*
args:
1. number: an array of numbers
2. callback: a function that takes two arguments (current number, index) and returns a boolean value
note: index(optional)
*/
const number=[1,2,3,4,5]
even=number.filter((curr,idx,array)=>{
    console.log(curr,idx,array);
    return curr%2==0;
})
console.log(even);