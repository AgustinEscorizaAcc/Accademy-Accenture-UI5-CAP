let array1 = ['a','l','f','a'];
let array2 = ['a','l','f','a','j','o','r'];

//compara revisando tamaños, si son arreglos, y si estan en la misma posicion los items
function equals(array1,array2){
    return Array.isArray(array1) &&
    Array.isArray(array2) &&
    array1.length === array2.length &&
    array1.every((val, index) => val === array2[index]);
};

function masLargo(array1,array2){
    if(array1.length > array2.length){
        return array1;
    }
    if(array1.length < array2.length){
        return array2;
    }
    if(array1.length === array2.length){
        return false;
    }
}
//devuelve elementos compartidos entre 2 arrays
function interseccionArrays(array1,array2){
    let filteredArray = array1.filter(value => array2.includes(value));
    return filteredArray;
}


if(equals(array1,array2)){
    console.log("arreglos son iguales");
}
else{
    console.log("arreglos son distintos");
    console.log("El arreglo mas largo es el "+ masLargo(array1,array2));
    console.log("los valores que comparte son " + interseccionArrays(array1,array2).length + " y son " + interseccionArrays(array1,array2));
}

