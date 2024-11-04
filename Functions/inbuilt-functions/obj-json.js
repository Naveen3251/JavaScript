/*
JSON.parse() and JSON.stringify()
Purpose: Convert between JSON strings and JavaScript objects.
*/

const jsonstr='{"name":"naveen","age":25}';
const obj=JSON.parse(jsonstr)
const revert=JSON.stringify(obj)
console.log(obj,revert);

/*
Object.keys() and Object.values()
Purpose: Returns an array of a given object's keys or values.

*/
const dic={"name":"naveen","age":25};
console.log(Object.keys(dic))
console.log(Object.values(dic))
console.log(dic.name,dic.age); // accessibility