function buscarMayor(array){
    let mayor = Math.max.apply(null,array);
    return mayor;
}

const array = [10,24,36,7,95,11,14,20];
console.log(buscarMayor(array));