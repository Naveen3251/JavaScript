//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

//eg 1:
function x(){ //--> closure(x)
    let a =10;
    function y(){ //--> closure(y)
        let b=100;
        function z(){
            console.log(a,b)
        }
        z(); //func call
    }
    y(); //func call
}
x(); //func call

//eg 2:
function x1(){
    var p=10
    function y(){
        console.log(p)
    }
    var p=100;
    return y;
}
l=x1();
console.log(l) /*op: ƒ y(){
    console.log(p)
}*/
l()  //op: 100

//eg 3: setTimeout with closure
//very usefull
function outer(){
    for(var i=1 ; i<=5; i++){
        function inner(x){
            setTimeout(function(){
                console.log(x)
            },x*1000)
        }
        inner(i)  // each time closure create new reference of functio  hence each time it update i
    }
   
}
outer()