
const form = document.getElementById("formSelection");
const users = JSON.parse(localStorage.getItem("users"));

localStorage.setItem("users",JSON.stringify(users));

function search(){
    let selection = document.getElementById("selection");
    let table = document.getElementById("table");
    let searchValue = document.getElementById("searchParameter");

    ///REVISO QUE SELECT CARGO Y BUSCO EN BASE A ESO, ADEMAS DE ALGUNA VALIDACION
    if(selection.value == 'id'){
        
        if(!isNaN(+searchValue.value)){
            let user =  searchUserById(+searchValue.value);
            if(user){
                mostrarUser(user);
                
            }else{
                alert("no se encontro en la bdd");
            }
        }else{
            alert("por favor ingrese un numero");
        }

    }
    if(selection.value == 'name'){
        if(typeof searchValue.value === 'string'){
            let user = searchUserByName(searchValue.value);
            if(user){
                mostrarUser(user);
            }else{
                alert("no se encontro en la bdd");
            }
        }else{
            alert("por favor ingrese un string");
        }
    }
    if(selection.value == 'phone'){
        if(!isNaN(+searchValue.value)){
            let user = searchUserByPhone(+searchValue.value);
            if(user){
                mostrarUser(user);
            }
            else{
                alert("no se encontro en la bdd");
            }
        }else{
            alert("ingrese solo numeros");
        }
    }
    if(selection.value == 'email'){
        if(validateEmail(searchValue.value)){
            let user = searchUserByEmail(searchValue.value);
            if(user){
                mostrarUser(user);
            }else{
                alert("no se encontro en la BDD");
            }
        }else{
            alert("ingrese Email valido");
        }
    }
    
}

function back(){

    window.location.href = `index.html`;
}
// FUNCIONES PARA BUSCAR SEGUN PARAMETRO, NO PUDE ENCONTRAR LA FORMA DE HACERLO DINAMICO
function searchUserById(value){
    let user;
    
    for(i=0;i<users.length;i++){
        if(users[i].id === value ){
            user = users[i];
        }
    }
    return user;
}
function searchUserByEmail(value){
    let user;
    
    for(i=0;i<users.length;i++){
        if(users[i].email === value ){
            user = users[i];
        }
    }
    return user;
}
function searchUserByName(value){
    let user;
    
    for(i=0;i<users.length;i++){
        if(users[i].name === value ){
            user = users[i];
        }
    }
    return user;
}
function searchUserByPhone(value){
    let user;
    
    for(i=0;i<users.length;i++){
        if(users[i].phone === value ){
            user = users[i];
        }
    }
    return user;
}

//VALIDACIONES

function validateEmail(value){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
    {
        return (true)
    }else{
        return false;
    }

}
function validatePhone(value){

}


function mostrarUser(user){
    let row = table.insertRow(0);
                row.innerHTML = `<div>DATOS DE ${user.name} </div>`;
                row.insertCell(0).innerHTML = `<br> ID: ${user.id}`;
                row.insertCell(1).innerHTML = `<br>Nombre: ${user.name}`;
                row.insertCell(2).innerHTML = `<br>Telefono: ${user.phone}`;
                row.insertCell(3).innerHTML = `<br>Email: ${user.email}`;
}