//Variables declared with let or const are block-scoped and exist only within the block they are defined in.
var change='False'
if(true){
    let blockVar1='I am blocked scope since i am using let inside the block';
    const blockVar2='I am blocked scope since i am using const inside the block';
    change="True" //since it is not block scope here chnage from false to true it will change
    var hi="hi is not block scope" // this can be acces outside block since it using var
    console.log(blockVar1,blockVar2); 
    //op:I am blocked scope since i am using let inside the block I am blocked scope since i am using const inside the block
}
console.log(change)  //op: True
console.log(hi) // op: hi is not block scope
console.log(blockVar1) //op1 : Uncaught ReferenceError ReferenceError: blockVar1 is not defined
console.log(bloackVar2) //op:  Uncaught ReferenceError ReferenceError: blockVar2 is not defined