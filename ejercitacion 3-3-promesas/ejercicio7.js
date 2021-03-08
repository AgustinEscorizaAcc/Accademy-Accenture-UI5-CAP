function numRandom(){
    let num = Math.floor(Math.random()*2);
    return new Promise ((resolve,reject)=>{
        if(num === 0){
            reject({error:true, message:'el numero es 0'})
        }else{
            resolve({error:false, message:'Numero adecuado'})
        }
    }) 
}
numRandom().then((ev)=>{
    document.getElementById("demo").innerHTML = ev.message;
})
    .catch((ev)=>{
        document.getElementById("demo").innerHTML = ev.message;
    });