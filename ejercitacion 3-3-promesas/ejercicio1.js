
let lanzarDado = function(){
    let randomNumber = Math.floor(Math.random() * 6);
    if(randomNumber < 3 ){
        document.getElementById("demo").innerHTML="Dio menos que 3";
    }
    else{
        document.getElementById("demo").innerHTML="Dio mas o igual que 3";
    }
}

lanzarDado();