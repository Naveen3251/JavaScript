const name1={
    firstname:"Naveen",
    lastname:"Kumar",
}
const name2={
    firstname:"Bharath",
    lastname:"Kumar"
}
//let say the both objects name1 and name2 are used to print full name 
// at this case function work is commmon printfullname
// instead of decalring printfullname in each name1 and name2 we can decalre commonly and we barrow that functiion for name 1 and name 2

function printFullName(city,country){
    console.log(`${this.firstname}`+" "+`${this.lastname}`+" "+`${city}`+" "+`${country}`);
}

// function barrowing using
// 1] call method
printFullName.call(name1);  //Naveen Kumar undefined undefined
printFullName.call(name2)   //Bharath Kumar undefined undefined
//immediatley invoke and execute 
//here we pass arguments as functionName.call(thisArg, arg1, arg2, ...);
printFullName.call(name1,"Coimbatore","India")  //Naveen Kumar Coimbatore India
printFullName.call(name2,"Bangalore","India")  //Bharath Kumar Bangalore India


// 2] apply method
//only diffrence s we will pass arguments in array  functionName.call(thisArg, [arg1, arg2, ...]);
printFullName.apply(name1,["Coimbatore","India"]) //Naveen Kumar Coimbatore India
printFullName.apply(name2,["Bangalore","India"]) //Bharath Kumar Bangalore,India

//3] bind method
//Creates a new function with a specified this value and initial arguments, which can be called later

const printMyname=printFullName.bind(name1,"Coimbatore","India");
//here printMyname is used to store the function binded then it can be used later
console.log(printMyname)  //ƒ ()
printMyname() //Naveen Kumar Coimbatore India

