//function pass as args to other function is called callback function

//it wont block since it is asynchronous
setTimeout(function(){
    console.log("Timer")
},5000)

function x(y){
    console.log('Inside x')
    y()
}
//passing function as arg-->call back function
x(function(){
    console.log('Y call back function')
})