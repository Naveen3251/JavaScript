async function fetchData(){
    try{
        const response=await fetch('https://api.twitter.com/')
        
        const data=response.json();
        console.log("succes")
    }catch(error){
        console.log(error)
    }
}
fetchData();