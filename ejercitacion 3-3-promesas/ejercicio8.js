

let array = [];

function ejercicio8(){
    let valor = prompt("ingrese valor para ingresar al array");

    setTimeout(function(){
        cargarArray(valor)
        .then(()=>{
            document.getElementById("demo").innerHTML = `EL array esta formado por ${array}`;
        })
        .catch((ev)=>{
            document.getElementById("demo").innerHTML = ev.message;
        })
    },3000);
    
}

function cargarArray(valor){
    
    return new Promise ((resolve,reject) => {
        if(valor){
            resolve(array.push(valor));
        }else{
            reject({error:true, message:'no se pudo cargar'});
        }
    })
}

function repetir(){
    let reiterar;
    do{
        reiterar = prompt("desea agregar otro? Carge S para seguir, otra cosa para parar");
        if(reiterar == 'S'){
            ejercicio8();
        }

    }while(reiterar == 'S');
}


ejercicio8();
repetir();
