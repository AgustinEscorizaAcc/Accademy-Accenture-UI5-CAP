function buscarMayor(array){
    let mayor = Math.max.apply(null,array);
    return mayor;
};
//te trae la posicion del elemento mas grande
function posicionDelMayor(array){
    let mayor = buscarMayor(array);
    let indexMayor = array.indexOf(mayor);
    return indexMayor;
};

const array = [10,24,36,7,95,11,14,20];
console.log("Elemento mayor en el array " + buscarMayor(array));
console.log("Posicion del mayor en el array " + posicionDelMayor(array));
