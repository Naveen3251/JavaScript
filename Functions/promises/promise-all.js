/*
Promise.all([promise1, promise2]): Takes an array of Promises and returns a new Promise that resolves when all of the given Promises have resolved. If any of the Promises are rejected, 
the returned Promise is rejected with the reason from the first Promise that was rejected.
*/ 
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
const prom1=new Promise((resolve,reject)=>{
    const isEx=true;
    if(isEx){
        resolve("resolved")
    }
    else{
        reject("rejected")
    }
})
const prom2=new Promise((resolve,reject)=>{
    const isOkay=false;
    if(isOkay){
        resolve("resolved")
    }
    else{
        reject("rejected")
    }
})

// it reject since prom2 is not fullfilled

Promise.all([prom1,prom2]).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)  //op : rejected
})  
// it resolve since bith full filled
Promise.all([promise1,prom1]).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error) //op (2) ['Data fetched', 'resolved']
}) 