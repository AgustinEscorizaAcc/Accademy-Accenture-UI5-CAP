const form = document.getElementById('f1');

const parcial1 = document.getElementById('tCP1');
const parcial2 = document.getElementById('tCP2');
const parcial3 = document.getElementById('tCP3');
const examenFinal = document.getElementById('tEF');
const trabajoFinal = document.getElementById('tTF');
const porcentajeParciales = 0.55;
const porcentajeExamen = 0.3;
const porcentajeTrabajo = 0.15;

function calcular(){
    //console.log(parcial1.value,parcial2.value,parcial3.value,examenFinal.value,trabajoFinal.value);


    let promedioParciales,calificacionFinal;
    let sumaParciales = +parcial1.value + +parcial2.value + +parcial3.value;
    promedioParciales =  sumaParciales / 3;


    document.getElementById('tPro').value = promedioParciales;
    document.getElementById('tPar').value = promedioParciales * porcentajeParciales;
    document.getElementById('tPEF').value = +examenFinal.value * porcentajeExamen;
    document.getElementById('tPTF').value = +trabajoFinal.value * porcentajeTrabajo;
    document.getElementById('tCF').value = promedioParciales*porcentajeParciales + +examenFinal.value * porcentajeExamen + +trabajoFinal.value * porcentajeTrabajo;

}
