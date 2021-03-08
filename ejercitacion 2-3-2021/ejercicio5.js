function buscarMayor(array){
    let mayor = Math.max.apply(null,array);
    return mayor;
};
function traerIndices(array,valor){
    let indexes = [];
    for(i=0; i< array.length; i++){
        if(array[i] === valor){
            indexes.push(i);
        }
    }
    return indexes;
};

const array = [10,24,36,7,98,11,14,20,98,14,10];
console.log("Elemento mayor en el array " + buscarMayor(array));
console.log("Posiciones del mayor en el array " + traerIndices(array,buscarMayor(array)));