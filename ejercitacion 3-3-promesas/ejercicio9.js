let array = [];

function ejercicio9(){
    let valor = prompt("ingrese valor para ingresar al array");

    setTimeout(async function(){
        try{
            await cargarArray(valor);
            document.getElementById("demo").innerHTML = `EL array esta formado por ${array}`
        }catch(error){
            document.getElementById("demo").innerHTML = error.message;
        }    
    },3000);
}

function cargarArray(valor){
    if(valor){
        array.push(valor);
    }else{
        throw new Error('no se pudo cargar');
    }

}

function repetir(){
    let reiterar;
    do{
        reiterar = prompt("desea agregar otro? Carge S para seguir, otra cosa para parar");
        if(reiterar == 'S'){
            ejercicio9();
        }

    }while(reiterar == 'S');
}

ejercicio9();
repetir();