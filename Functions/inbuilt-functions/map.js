const numbers=[1,2,3,4,5,6]
/*
args:
1. current element
2. current index (optional)
3. original array (optional)

*/

const doubled=numbers.map((curr,idx,a)=>{
    console.log(curr,idx,a);
    return curr*2;
});
console.log(doubled)