/*
accumulator:The accumulator accumulates the callback's return values.
currentValue:The current value
index:The index of the (optional) 
array to accumulate (optional)
*/
const numbers=[1,2,3,4,5]
const num=numbers.reduce((acc,curr,idx,array)=>{
    console.log(acc,curr,idx,array)
    return acc+curr;
})
console.log(num);