const form = document.getElementById('f1');

const cantidadTortas = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const porcDescuento100 = 0.1; 
const porcDescuento500 = 0.15; 


function calcular(){
    
    //calculo todo
    let tortasRegaladas = calcularTortasRegaladas();
    let tortasTotales = tortasRegaladas + +cantidadTortas.value;

    let descuento = calcularDescuento(tortasTotales);
    let precioFinal = (+cantidadTortas.value * +precio.value) - descuento;


    //lo muestro en pantalla
    document.getElementById("regaladas").value = tortasRegaladas;
    document.getElementById("totalTortas").value = tortasTotales;
    document.getElementById("descuento").value = descuento;
    document.getElementById("precioFinal").value = precioFinal;

}

function calcularTortasRegaladas(){
    let tortasRegaladas = 0;
    if(+cantidadTortas.value >= 10){
        tortasRegaladas = Math.floor (+cantidadTortas.value / 15);

    }
    return tortasRegaladas;
}
function calcularDescuento(tortasTotales){
    let descuento = 0;
    if(tortasTotales > 100){
        if(tortasTotales > 500){
            descuento = (+cantidadTortas.value * +precio.value) * porcDescuento500;
        }
        else{
            descuento = (+cantidadTortas.value * +precio.value) * porcDescuento100;
        }
    }
    return descuento;
}