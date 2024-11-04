/*
task:
  double the number
  take the number <25
  summ it
*/
const numbers=[1,2,3,4,5,6]
const res=numbers.map(curr=>curr*curr).filter(curr=>curr<25).reduce((acc,curr)=>acc+curr)
console.log(res);