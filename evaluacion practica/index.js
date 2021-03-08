
//Parte linda del programa
const name = document.getElementById("name");
const email = document.getElementById("email");
const dni = document.getElementById("dni");
const birthDate = document.getElementById("birthDate");

function productView(){

    
    if(validarDatos()){
        window.location.href = `productView.html`;
    }else{
        alert("ingrese datos validos");
    }
}

function validarDatos(){
    
    let flag = false;
    let edad = calcularEdad(birthDate.value);
    let mail = email.value;
    let nombre = name.value;

    if(nombre.length <= 30){
        if(edad >= 18){
            if(validarEmail(mail)){
                flag = true;
                return flag;
            }else{
                alert("mail invalido");
            }
        }else{
            alert("solo mayores de 18 años");
        }
    }else{
        alert("nombre muy largo, menos de 30")
    }
    return flag;
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