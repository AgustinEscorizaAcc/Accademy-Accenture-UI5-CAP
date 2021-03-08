datos1 = ['Fido','Gomez',26,15000.78,true];
datos2 = ['Gervasio','Fernandez',32,28550,false];

function masViejo(array1,array2){
    let posicionEdad = 2;
    if(array1[posicionEdad]>array2[posicionEdad]){
        return array1;
    }
    if(array1[posicionEdad]<array2[posicionEdad]){
        return array2;
    }
}
function estaCasado(array){
    return array[4];
}
function aumento(array1,array2){
    const porcentajeAumento = 0.125;
    let aumento = array2[3]*porcentajeAumento;
    let aCobrar = array1[3] + aumento;
    return aCobrar;
}
let viejo = masViejo(datos1,datos2)
console.log("El mas viejo es "+ viejo[0]);

if(estaCasado(datos1)){
    console.log(datos1[0] + "Esta casado ");
}
if(estaCasado(datos2)){
    console.log(datos2[0] + "Esta casado ");
}

console.log("Monto a cobrar de "+ datos1[0] + " es de " + aumento(datos1,datos2));