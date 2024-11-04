const numbers=[1,2,3,4,5,6]
console.log('initial array',numbers)


// 1. push(): Adds elements to the end of an array.
numbers.push(10)
console.log('array after push element at end',numbers)

// 2 pop(): Removes elements from the end of an array
numbers.pop()
console.log('array after poping at end',numbers)

// 3. shift(): Removes elements from the beginning of an array
numbers.shift()
console.log('array after shifting at start',numbers)

// 4. unshift(): Adds elements to the beginning of an array
numbers.unshift(0)
console.log('array after unshifting at start',numbers)

// 5. splice(): Adds/removes elements from an array.
