const form = document.getElementById('f1');
const cantidad = document.getElementById('cantidad');
const interesAnual = 33.5;

function calcular(){
    interesMensual = interesAnual/12;
    interesCada3Meses = interesMensual*3;
    document.getElementById('intMes').value = +cantidad.value * interesMensual /100;
    document.getElementById('int3Meses').value = +cantidad.value * interesCada3Meses /100;
}