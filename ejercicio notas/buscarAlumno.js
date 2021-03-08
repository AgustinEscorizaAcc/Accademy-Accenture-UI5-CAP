const alumnos = JSON.parse(localStorage.getItem("alumnosTotalesConNota"));
const  tablaAlumnos = document.getElementById("tablaMostrarAlumno");


function menu(){
    window.location.href = `menu.html`;
}

function salir(){
    if(confirm("Seguro que te queres ir?")){
        alert("CHAU CHAUUUUU");
        window.location.replace("http://google.com");
    }
}

function buscarAlumno(){
    
    let valorBusqueda = document.getElementById("valorBusqueda");
    let seleccion = document.getElementById("seleccion");
    console.log(alumnos);

    if(seleccion.value == "dni"){
        if(!isNaN(+valorBusqueda.value)){
            let alumno = buscarAlumnoPorDni(valorBusqueda.value);
            if(alumno){
                mostrarAlumno(alumno);
            }else{
                alert("no se encuentra en la base de datos");
            }

        }else{
            alert("ingrese solo numero de DNI, no letras ni numeros");
        }
    }
    if(seleccion.value == "nombre"){
        if(typeof valorBusqueda.value === 'string' && valorBusqueda.value.length <= 30){
            let alumno = buscarAlumnoPorNombre(valorBusqueda.value);
            if(alumno){
                mostrarAlumno(alumno);
            }else{
                alert("no se encuentra en la base de datos");
            }
        }else{
            alert("Ingrese un string de menos de 30 caracteres");
        }
    }
    if(seleccion.value == "telefono"){
        if(!isNaN(+valorBusqueda.value)){
            let alumno = buscarAlumnoPorTelefono(+valorBusqueda.value);
            if(alumno){
                mostrarAlumno(alumno);
            }else{
                alert("no se encuentra en la base de datos");
            }
        }else{
            alert("ingrese solo numeros de telefono, no letras ni puntos");
        }
    }
    if(seleccion.value == "email"){
        if(validarEmail(valorBusqueda.value)){
            let user = buscarAlumnoPorEmail(valorBusqueda.value);
            if(user){
                mostrarAlumno(user);
            }else{
                alert("no se encontro en la BDD");
            }
        }else{
            alert("ingrese Email valido");
        }
    }
}
 ///VALIDACION
function validarEmail(value){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
    {
        return (true)
    }else{
        return false;
    }

}



function buscarAlumnoPorDni(value){
    let alumnoRetorno;
    
    for(i=0;i<alumnos.length;i++){
        if(alumnos[i].dni === value ){
            alumnoRetorno = alumnos[i];
        }
    }
    return alumnoRetorno;
}

function buscarAlumnoPorNombre(value){
    let alumnoRetorno;
    
    for(i=0;i<alumnos.length;i++){
        if(alumnos[i].nombre === value ){
            alumnoRetorno = alumnos[i];
        }
    }
    return alumnoRetorno;
}
function buscarAlumnoPorEmail(value){
    let alumnoRetorno;
    
    for(i=0;i<alumnos.length;i++){
        if(alumnos[i].email === value ){
            alumnoRetorno = alumnos[i];
        }
    }
    return alumnoRetorno;
}
function buscarAlumnoPorTelefono(value){
    let alumnoRetorno;
    
    for(i=0;i<alumnos.length;i++){
        if(alumnos[i].telefono == value ){
            alumnoRetorno = alumnos[i];
        }
    }
    return alumnoRetorno;
}





function mostrarAlumno(alumno){
    let row = tablaAlumnos.insertRow(0);
    row.innerHTML= `Alumno: ${alumno.nombre}`;

        row.insertCell(0).innerHTML = `<br>Email: ${alumno.email} `;
        row.insertCell(1).innerHTML = `<br>Codigo curso: ${alumno.curso} `;
        row.insertCell(2).innerHTML = `<br>Legajo: ${alumno.legajo} `;
        row.insertCell(3).innerHTML = `<br>Nombre: ${alumno.nombre} `;
        row.insertCell(4).innerHTML = `<br>Telefono: ${alumno.telefono} `;
        row.insertCell(5).innerHTML = `<br>DNI: ${alumno.dni} `;
        row.insertCell(6).innerHTML = `<br>Edad: ${alumno.edad} `;
}