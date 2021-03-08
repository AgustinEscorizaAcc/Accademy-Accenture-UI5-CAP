function cargaAutomatica(largo){
    let array = [];
    for(i=0;i<largo;i++){
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

let arrayCargado = cargaAutomatica(8);
console.log(arrayCargado);