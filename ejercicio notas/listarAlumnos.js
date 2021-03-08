
function listarAlumnos(){
    let tablaAlumnos = document.getElementById("tablaAlumnos");
    let botonListar = document.getElementById("listar");
    let alumnosTotales = JSON.parse(localStorage.getItem("alumnosTotalesConNota"));

    botonListar.hidden = true;
    console.log(alumnosTotales);
    for(i=0;i<alumnosTotales.length;i++){
        let row = tablaAlumnos.insertRow(i);
        row.innerHTML= `Alumno: ${alumnosTotales[i].nombre}`;

        row.insertCell(0).innerHTML = `<br>Email: ${alumnosTotales[i].email} `;
        row.insertCell(1).innerHTML = `<br>Codigo curso: ${alumnosTotales[i].curso} `;
        row.insertCell(2).innerHTML = `<br>Legajo: ${alumnosTotales[i].legajo} `;
        row.insertCell(3).innerHTML = `<br>Nombre: ${alumnosTotales[i].nombre} `;
        row.insertCell(4).innerHTML = `<br>Telefono: ${alumnosTotales[i].telefono} `;
        row.insertCell(5).innerHTML = `<br>DNI: ${alumnosTotales[i].dni} `;
        row.insertCell(6).innerHTML = `<br>Edad: ${alumnosTotales[i].edad} `;
        row.insertCell(7).innerHTML = `<br> Química: ${alumnosTotales[i].notas.quimica} Matemática: ${alumnosTotales[i].notas.matematica} Ciencias Sociales: ${alumnosTotales[i].notas.sociales} Física: ${alumnosTotales[i].notas.fisica} Historia: ${alumnosTotales[i].notas.historia} Biología: ${alumnosTotales[i].notas.biologia} Informática: ${alumnosTotales[i].notas.informatica} Idiomas: ${alumnosTotales[i].notas.idiomas}`;
        row.insertCell(8).innerHTML = `<br>Aprobado: ${alumnosTotales[i].aprobado} `;
    }
}

function menu(){
    window.location.href = `menu.html`;
}
function salir(){
    if(confirm("Seguro que te queres ir?")){
        alert("CHAU CHAUUUUU");
        window.location.replace("http://google.com");
    }
}