
function buscarAlumno(){
    window.location.href = `buscarAlumno.html`;
}

function listarAlumnos(){
    window.location.href = `listarAlumnos.html`;
}
function listarMateria(){
    window.location.href = `listarMateria.html`;
}
function salir(){
    if(confirm("Seguro que te queres ir?")){
        alert("CHAU CHAUUUUU");
        window.location.replace("http://google.com");
    }
}