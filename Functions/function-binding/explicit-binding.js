//eg 1: using call
const person={
    name:"Naveen"
}
function greet(ek){
    console.log(this.name,ek) //here person.name
}
//barrow the func
greet.call(person,"Kumar") //Naveen Kumar

//eg 2: using apply
function welcome(...elements){
    console.log(this.name,elements)
}
welcome.apply(person,["nk","Vk"]) //Naveen ['nk', 'Vk']


//eg3 : using bind
function core(cr){
    console.log(this.name,cr)
}
const boundStorage=core.bind(person,"corepart")
console.log(boundStorage);
boundStorage()//invoke
/*ƒ ()
Naveen corepart*/