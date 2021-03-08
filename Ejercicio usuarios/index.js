/// DATOS
const users= [
    {
        "id":    0,
        "name": "Carla",
        "phone": 1545628984,
        "email": "carla@gmail.com"
    },
    {
        "id": 1  ,
        "name": "Pedro",
        "phone": 1545251245,
        "email": "pedro@gmail.com"
    },
    {
        "id": 2  ,
        "name": "Lucas" ,
        "phone": 1523357849,
        "email": "lucas@gmail.com"
    },
    {
        "id": 3  ,
        "name": "Ana",
        "phone": 15789456,
        "email": "ana@gmail.com"
    }
];
//EJERCICIO
localStorage.setItem("users",JSON.stringify(users));

function listUsers(){

    window.location.href = `listUsers.html`;
}

function searchUsers(){
    window.location.href = `searchUser.html`;
}


function exit(){
    
  
    if(confirm("Seguro que te queres ir?")){
        window.location.replace("http://google.com");
    }

}