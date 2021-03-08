var valores = [true, 5, false, "hola", "adios", 2,3];

function buscarTipoElemento(array,tipo){
    let elementos = [];
    for(i=0 ; i < array.length ; i++){
        if(typeof array[i] === tipo){
            elementos.push(array[i]);
        }
    }
    return elementos;
}


function mayorString(array){
    let strings = buscarTipoElemento(array,'string');
    let mayor = strings.reduce(
            function(a,b){
                let mayor;
                if(a.length > b.length){
                    mayor = a
                }else{
                    if(a.length < b.length){
                        mayor = b;
                    }
                    else{
                        mayor = a + " " +b;
                    }
                }
                return mayor;
            }
        )

    return mayor;
}

function ejercicio2(){

    //parte 1
    let mayor = mayorString(valores);

    console.log("El/los mayores string son " + mayor);

    //parte 2
    let numeros = buscarTipoElemento(valores,'number');
    console.log("los numeros son " + numeros);


    let suma = numeros.reduce( (a,b) => a + b);
    let resta = numeros.reduce( (a,b) => a - b);
    let multiplicacion = numeros.reduce( (a,b) => a * b);

    if(numeros.includes(0)){
        let division = numeros.reduce( (a,b) => a / b);
        console.log("la division de numeros es " + division);
    }
    else{
        console.log("no se puede dividir un 0");
    }
    console.log("la suma de numeros es " + suma);
    console.log("la resta de numeros es " + resta);
    console.log("la multiplicacion de numeros es " + multiplicacion);
}

ejercicio2();