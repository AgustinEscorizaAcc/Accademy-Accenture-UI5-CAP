function cargaAutomatica(largo){
    let array = [];
    for(i=0;i<largo;i++){
        if(i%2 === 0){
            array.push(0);
        }
        else{
            array.push(i);
        }
    }
    return array;
}

let arrayCargado = cargaAutomatica(8);
console.log(arrayCargado);