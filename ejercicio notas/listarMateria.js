const alumnos = JSON.parse(localStorage.getItem("alumnosTotalesConNota"));
const tablaAlumnosAprobados = document.getElementById("tablaAlumnosAprobados");
const tablaAlumnosDesaprobados = document.getElementById("tablaAlumnosDesaprobados");
const headerAprobados = document.getElementById("headerAprobados");
const headerDesaprobados = document.getElementById("headerDesaprobados");
const botonLimpiarTabla = document.getElementById("limpiar");

function menu(){
    window.location.href = `menu.html`;
}
function salir(){
    if(confirm("Seguro que te queres ir?")){
        alert("CHAU CHAUUUUU");
        window.location.replace("http://google.com");
    }
}
function limpiarTablas(){
    headerDesaprobados.hidden = true;
    headerAprobados.hidden = true;
    botonLimpiarTabla.hidden = true;
    tablaAlumnosAprobados.innerHTML= "";
    tablaAlumnosDesaprobados.innerHTML= "";
}

function listarMateria(){
    let seleccion = document.getElementById("seleccion");
    let materia = seleccion.value;
    

    headerDesaprobados.hidden = false;
    headerAprobados.hidden = false;
    botonLimpiarTabla.hidden = false;

    mostrarAlumnos(alumnos,materia);
}




function mostrarAlumnos(alumnosTotales,materia){
    for(i=0;i<alumnosTotales.length;i++){
        if(alumnosTotales[i].notas[materia] >= 5){
            let contadorAprobados = 0;
            let row = tablaAlumnosAprobados.insertRow(contadorAprobados);
            row.innerHTML= `Alumno aprobado:`;

            row.insertCell(0).innerHTML = `<br>Nombre: ${alumnosTotales[i].nombre} `;
            row.insertCell(1).innerHTML = `<br>DNI: ${alumnosTotales[i].dni} `;
            row.insertCell(2).innerHTML = `<br>Curso: ${alumnosTotales[i].curso} `;
            row.insertCell(3).innerHTML = `<br>Nota de ${materia}: ${alumnosTotales[i].notas[materia]} `;
            contadorAprobados++;
        }else{
            let contadorDesaprobados = 0;
            let row = tablaAlumnosDesaprobados.insertRow(contadorDesaprobados);
            row.innerHTML= `Alumno desaprobado:`;

            row.insertCell(0).innerHTML = `<br>Nombre: ${alumnosTotales[i].nombre} `;
            row.insertCell(1).innerHTML = `<br>DNI: ${alumnosTotales[i].dni} `;
            row.insertCell(2).innerHTML = `<br>Curso: ${alumnosTotales[i].curso} `;
            row.insertCell(3).innerHTML = `<br>Nota de ${materia}: ${alumnosTotales[i].notas[materia]} `;
            contadorDesaprobados++;
        }
    }
}