/*
Nan
Purpose: Checks if a value is NaN (Not-a-Number).
*/
console.log(isNaN("hello")) // True
console.log(isNaN(123)) // False

/*
number->string
string->number
*/
console.log(typeof Number("123")); // number
console.log(typeof String(123)) // string

/*
parseInt() and parseFloat()
Purpose: Convert strings to integers or floating-point numbers.
*/
console.log(parseInt("123"),typeof parseInt("123")) // 123  number
console.log(parseFloat("12.3"),typeof parseFloat("12.3")) // 12.3 