/*
A Promise has three possible states:

Pending: Initial state; neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
*/

/*syntax:
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (operation successful ) {
    resolve(result); // Transition to fulfilled state
  } else {
    reject(error); // Transition to rejected state
  }
});
*/

//eg 1: basic promise
const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const sucess=true;
        if(sucess){
            resolve("Data fetched") //fullfilled
        }
        else{
            reject("Failed") //failed
        }
    },1000) //upto 1s it is in pending state
})
promise1.then((res)=>{
    console.log(res) // op: Data feteched
}).catch((error)=>{
    console.log(error)
})

//eg2: promise chaining

promise1.then((res)=>{
    console.log(res)   //op1 : Data fetched
    return "Process it"
}).then((res)=>{
    console.log(res);  // op2 : Process it
    return "let me finish"
}).then((res)=>{
    console.log(res)  //op3 : let me finish
}).catch((error)=>{
    console.log(error)
})

