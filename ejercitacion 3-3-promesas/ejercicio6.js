const form = document.getElementById("registro");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password = document.getElementById("password");
const comentario = document.getElementById("comentarios");

//OBLIGATORIOS
nombre.addEventListener("focusout",()=>{
    console.log(nombre.value);
    if(nombre.value == ""){
        alert("Nombre vacio");
    }
});
apellido.addEventListener("focusout",()=>{
    if(apellido.value == ""){
        alert("Apellido vacio");
    }
});
comentario.addEventListener("focusout",()=>{
    if(comentario.value == ""){
        alert("Comentario vacio");
    }
});

//EMAIL VALIDO
email.addEventListener("focusout",()=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email.value)){
        alert("Email invalido");
    }
});

//longitud max comentaio
comentario.addEventListener("focusout",()=>{
    console.log(comentario.value);
    if(comentario.value.length > 50){
        alert("texto muy largo");
    }
});

//password validacion
password.addEventListener("focusout",()=>{
    let passwordCorrect = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if(!passwordCorrect.test(password.value)){
        alert("password no tiene mayus minus y mas de 6");
    }
});