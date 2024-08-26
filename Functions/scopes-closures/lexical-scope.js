
//outer <-- inner1 <-- inner2 <-- so on... <-- global(window) (this is called lexical scope)
function parent(){
    let x=10; //here it found x hence it prints
    function subchild(){
        // here also x not there then it goes to parent i.e parent
        function child_to_subchild(){
            console.log(x) // looks inside the child_to_subchild function
                           // since x is not there it goes to parent i.e subchild
            console.log(b);  // it will go outside the parent function  and see in global(window)
        }
        child_to_subchild()
    }
    subchild()
}
var b=90
parent()  
//op: 10
    //90