const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const dni = document.getElementById("dni");
const nacimiento = document.getElementById("nacimiento");
const telefono = document.getElementById("telefono");
const legajo = document.getElementById("legajo");
const seleccionCurso = document.getElementById("seleccionCurso");
const cursosBoton = document.getElementById("cursosBoton");
const headerCurso = document.getElementById("headerCurso");

 // CARGAR CONST ALUMNOS Y METERLOS EN EL LOCAL STORAGE ASI DESPUES LOS TRAIGO
const alumnos = [
    {
        nombre: "Juan",
        email: "juanPerez@outlook.es",
        dni: 46754260,
        curso: 1,
        telefono: 144555555,
        legajo: "A1467542602021",
        edad: 22,
        notas: {
            quimica: 5,
            matematica: 7,
            sociales: 8,
            fisica: 9,
            historia: 4,
            biologia: 6,
            informatica: 7,
            idiomas: 8
        },
        aprobado: true
    },
    {
        nombre: "Ana",
        email: "AnaDiaz@outlook.es",
        dni: 40765243,
        curso: 1,
        telefono: 144555555,
        legajo: "A1407652432021",
        edad: 21,
        notas: {
            quimica: 2,
            matematica: 7,
            sociales: 8,
            fisica: 9,
            historia: 4,
            biologia: 4,
            informatica: 5,
            idiomas: 9
        },
        aprobado: false
    },
    {
        nombre: "Martin",
        email: "MartinFulanito@outlook.es",
        dni: 42554362,
        curso: 2,
        telefono: 135675234,
        legajo: "A2425543622021",
        edad: 20,
        notas: {
            quimica: 5,
            matematica: 7,
            sociales: 4,
            fisica: 9,
            historia: 10,
            biologia: 4,
            informatica: 5,
            idiomas: 9
        },
        aprobado: true
    },
    
]
const cursos = [
{
    id: "1",
    edadMaxima: 25,
    edadMinima: 18,
    nombre: "Comision Nro 1",
    alumnos: [41854160,46754260,40765243]
},
{
    id: "2",
    edadMaxima: 22,
    edadMinima: 18,
    nombre: "Comision Nro 2",
    alumnos: [42554362,46621260,46781243]
},
{
    id: "3",
    edadMaxima: 24,
    edadMinima: 18,
    nombre: "Comision Nro 3",
    alumnos: [42554362,46621260,45721643]
}
];

function login(){
    //console.log(nombre.value,email.value,dni.value,nacimiento.value,legajo.value,seleccionCurso.value,telefono.value);
    if(validarDatos()){
        let edad = calcularEdad(nacimiento.value);
        let alumno = {
            nombre: nombre.value,
            email: email.value,
            dni: dni.value,
            curso: seleccionCurso.value,
            telefono: telefono.value,
            legajo: legajo.value,
            edad: edad.value
        };
        localStorage.setItem("alumnoLogeado",JSON.stringify(alumno));
        localStorage.setItem("cursos",JSON.stringify(cursos));
        localStorage.setItem("alumnosTotalesConNota",JSON.stringify(alumnos));
        window.location.href = `agregarNotas.html`;
    }else{
        alert("ingrese datos validos");
    }
}

function cargarCurso(){
    let htmlString = "";
    
    seleccionCurso.hidden = false;
    headerCurso.hidden = false;
    cursosBoton.hidden = true;
    for(i=0; i<cursos.length; i++){
        htmlString += "<option value="+(cursos[i].id)+">"+cursos[i].nombre + "</option>";
        
    }
    seleccionCurso.innerHTML = htmlString;
}



// VALIDAR DATOS

function validarDatos(){
    let flag = false;
    let mail = email.value;
    let cursoId = seleccionCurso.value;
    let edad = calcularEdad(nacimiento.value);
    let edadMinima = edadMinimaCurso(cursoId); 
    let edadMaxima = edadMaximaCurso(cursoId);
    seleccionCurso.hidden = true;
    headerCurso.hidden = true;
    cursosBoton.hidden = false;
    if(perteneceCurso(dni.value,+cursoId)){
        if(legajoValido(legajo.value,cursoId,dni.value,2021)){
            if(nombre.value.length <= 30 && nombre.value.length > 0){
                if(edad >= edadMinima && edad <= edadMaxima){
                    if(validarEmail(mail)){
                        //Es un int asi que lo tengo que validar de este forma, lo hice tipo number para no validar que no sean letras
                        if(telefono.value < 1000000000){
                            flag = true;
                        }else{
                            alert("telefono invalido");
                        }
                    }else{
                        alert("mail invalido");
                    }
                }else{
                    alert(`edad no valida en el rango de edades de curso, solo entre ${edadMinima} y ${edadMaxima} años`);
                }
            }else{
                alert("nombre muy largo (menos de 30 caracteres) o vacio");
            }
        }else{
            alert("legajo no valido");
        }
    }else{
        alert("no pertenece al curso");
    }
    return flag;
}


function legajoValido(legajo,cursoId,dni,año){
    trueLegajo = "A"+cursoId+dni+año;

    if(legajo === trueLegajo){
        return true;
    }else{
        return false;
    }
}

function validarEmail(email){    
    const re =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(re.test(email)){
        return true;
    }else{
        return false;
    }
}

function calcularEdad(date){

    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

function perteneceCurso(dni,cursoId){
    for(i=0;i<cursos.length;i++){
        if(cursos[i].id == cursoId){
            console.log(cursos[i].alumnos);
            for(j=0;j<cursos[i].alumnos.length; j++){
                if(cursos[i].alumnos[j] == dni){
                    return true;
                }
            }
        }
    }
    return false;
}
function edadMinimaCurso(id){
    for(i=0; i<cursos.length; i++){
        if(cursos[i].id === id){
            return cursos[i].edadMinima;
        }
    }
}

function edadMaximaCurso(id){
    for(i=0; i<cursos.length; i++){
        if(cursos[i].id === id){
            return cursos[i].edadMaxima;
        }
    }
}