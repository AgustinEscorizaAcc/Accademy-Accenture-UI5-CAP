const quimica = document.getElementById("quimica");
const matematica = document.getElementById("matematica");
const sociales = document.getElementById("sociales");
const fisica = document.getElementById("fisica");
const historia = document.getElementById("historia");
const biologia = document.getElementById("biologia");
const informatica = document.getElementById("informatica");
const idiomas = document.getElementById("idiomas");


function cargarNotas(){

    if(validarNotas()){
        window.location.href = `menu.html`;
    }else{
        alert("notas invalidas")
    }
}

function validarNotas(){

    let flag = false;
    if(validarNotaMateria(quimica.value)){
        if(validarNotaMateria(matematica.value)){
            if(validarNotaMateria(sociales.value)){
                if(validarNotaMateria(fisica.value)){
                    if(validarNotaMateria(historia.value)){
                        if(validarNotaMateria(biologia.value)){
                            if(validarNotaMateria(informatica.value)){
                                if(validarNotaMateria(idiomas.value)){
                                    let alumno = JSON.parse(localStorage.getItem("alumnoLogeado"));
                                    let alumnosTotales = JSON.parse(localStorage.getItem("alumnosTotalesConNota"));
                                    let notas = {
                                        quimica: quimica.value,
                                        matematica: matematica.value,
                                        sociales: sociales.value,
                                        fisica: fisica.value,
                                        historia: historia.value,
                                        biologia: biologia.value,
                                        informatica: informatica.value,
                                        idiomas: idiomas.value
                                    };
                                    let aprobado = calcularAprobado(notas);
                                    let alumnoConNota = {
                                        nombre: alumno.nombre,
                                        email: alumno.email,
                                        dni: alumno.dni,
                                        curso: alumno.curso,
                                        telefono: alumno.telefono,
                                        legajo: alumno.legajo,
                                        edad: alumno.edad,
                                        notas: notas,
                                        aprobado: aprobado
                                    };
                                    if(alumnosTotales === null){
                                        alumnosTotales = [];
                                    }
                                    alumnosTotales.push(alumnoConNota);
                                    localStorage.removeItem("alumnoLogeado");
                                    localStorage.removeItem("alumnosTotalesConNota");
                                    localStorage.setItem("alumnoLogeado",JSON.stringify(alumnoConNota));
                                    localStorage.setItem("alumnosTotalesConNota",JSON.stringify(alumnosTotales));
                                    flag = true;
                                }else{
                                    alert("nota de idiomas invalida");
                                }
                            }else{
                                alert("nota de informatica invalida");
                            }
                        }else{
                            alert("nota de biologia invalida");
                        }
                    }else{
                        alert("nota de historia invalida");
                    }
                }else{
                    alert("nota de fisica invalida");
                }
            }else{
                alert("nota de sociales invalida");
            }
        }else{
            alert("nota de matematica invalida");
        }
    }else{
        alert("nota de quimica invalida");
    }
    return flag;
}


function calcularAprobado(notas){
    let flag = false;
    let porcentaje = 0;
    if(notas.quimica >= 5){
        porcentaje += 10;
    }
    if(notas.matematica >= 5){
        porcentaje += 20;
    }
    if(notas.sociales >= 5){
        porcentaje += 5;
    }
    if(notas.fisica >= 5){
        porcentaje += 10;
    }
    if(notas.historia >= 5){
        porcentaje += 5;
    }
    if(notas.biologia >= 5){
        porcentaje += 20;
    }
    if(notas.informatica >= 5){
        porcentaje += 30;
    }
    if(notas.idiomas >= 5){
        porcentaje += 30;
    }

    if(porcentaje >= 100){
        flag = true;
    }
    return flag;
}

function validarNotaMateria(nota){
    if(nota > 0 && nota <= 10){
        return true;
    }else{
        return false;
    }
}