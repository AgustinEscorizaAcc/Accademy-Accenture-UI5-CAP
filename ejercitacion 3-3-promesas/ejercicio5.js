const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const form = document.getElementById('f1');
const dni = document.getElementById('dni');
const letra = document.getElementById('letra');


function verificar(){
    
    if(+dni.value > 0 && +dni.value < 99999999){
        let resto = +dni.value % 23;
        if(letra.value === letras[resto]){
            alert("La letra coincide con el DNI!");
        }else{
            alert("La letra no coincide con el DNI D:");
        }
    }
    else{
        alert('Ingrese un dni Valido');
    }
}