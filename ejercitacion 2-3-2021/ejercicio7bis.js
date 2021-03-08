datos1 = ['Fido','Gomez',26,15000.78,true];
datos2 = ['Gervasio','Fernandez',32,28550,false];



function cargarPersona(array){
    let persona = new Map();
    persona.set(array[0],{nombre: array[0], apellido: array[1],edad: array[2],sueldo: array[3],edad:array[4]});
    persona.set(nombre, array[0]);
    persona.set(nombre, array[1]);
    persona.set(nombre, array[2]);
    persona.set(nombre, array[3]);
    persona.set(nombre, array[4]);
    return persona;
}
function masViejo(){
    
}
let persona1=cargarPersona(datos1);
cargarPersona(datos2);

