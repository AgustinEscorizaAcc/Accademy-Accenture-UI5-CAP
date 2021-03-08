

const table = document.getElementById("table");
const users = JSON.parse(localStorage.getItem("users"));
function listUsers(){
    
    for(i=0; i<users.length; i++){
        let row = table.insertRow(i);
        row.innerHTML = `<div>DATOS DE ${users[i].name} </div>`;

        row.insertCell(0).innerHTML = `<br> ID: ${users[i].id}`;
        row.insertCell(1).innerHTML = `<br>Nombre: ${users[i].name}`;
        row.insertCell(2).innerHTML = `<br>Telefono: ${users[i].phone}`;
        row.insertCell(3).innerHTML = `<br>Email: ${users[i].email}`;
    }
}

function back(){

    window.location.href = `index.html`;
}
listUsers();