//Functions can be passed as arguments to other functions, which can then invoke them.

const greeting=function(name){
    console.log(`Hi ${name}`)
}

const otherFunc=function(greetingFunc,name){
    //invoking here
    //step 2
    greetingFunc(name); //op : Hi Nk
}
// step 1 : passing function as args
otherFunc(greeting,"Nk");  