const productos = [
    {
        id: "1",
        name: "Torta",
        price: "150"
    },
    {
        id: "2",
        name: "pastelitos",
        price: "100"
    }
];

const table = document.getElementById("table");
const tablaCarro = document.getElementById("tablaCarro");
var carro = [];
var totalAPagar = 0;
//15% de descuento
const descuentoCupon = 0.15;

function cargarTabla(){

    for(i=0; i<productos.length; i++){
        let row = table.insertRow(i);
        row.innerHTML= `PRODUCTO NUMERO ${i+1}`;

        row.insertCell(0).innerHTML = `<br> ID: ${productos[i].id}`;
        row.insertCell(1).innerHTML = `<br>Nombre del producto: ${productos[i].name}`;
        row.insertCell(2).innerHTML = `<br>Precio: ${productos[i].price}`;
    }

}

/// SACO EL ESTADO HIDDEN Y CARGO LAS TORTAS
function mostrarProductosComprables(){
    let selection = document.getElementById("selection");

    //AGREGO BOTONES A LA VISTA Y OPCIONES DE COMPRA
    let agregarCarrito = document.getElementById("agregarCarrito");
    let cantLabel = document.getElementById("cantLabel");
    let cantInput = document.getElementById("cantInput");
    let comprar = document.getElementById("comprar");
    let mostrarCarro = document.getElementById("mostrar");

    let htmlString = "";

    comprar.hidden = true;
    selection.hidden = false;
    agregarCarrito.hidden = false;
    cantLabel.hidden = false;
    cantInput.hidden = false;
    mostrarCarro.hidden = false;
    
    for(i=0; i<productos.length; i++){
        htmlString += "<option value="+(i+1)+">"+productos[i].name + "</option>";
        
    }
    selection.innerHTML = htmlString;
}

//si elije comprar un producto lo paso a la vista de detalle
function cargarCarro(){
    let selection = document.getElementById("selection");
    let cant = document.getElementById("cantInput");
    //busco el producto por id que se desea comprar
    let producto = buscarProducto(selection.value);
    let subtotal = producto.price * cant.value;
    //creo objeto compra
    let compra = {
        subtotal: subtotal,
        producto: producto.name,
        cantidad: cant.value
    };
    
    if(cant > 0 ){
        //Guardo en el carro
        carro.push(compra);
        alert("se agrego Item al carro");
    }else{
        alert("cantidad invalida");
    }
}

function limpiarCarro(){
    carro = [];
    tablaCarro.innerHTML= "";
}

function buscarProducto(id){
    let prod;
    for(i=0;i<productos.length;i++){
        if(id == productos[i].id){
            prod = productos[i];
        }
    }
    return prod;
}





function mostrarCarro(){
    let confirmar = document.getElementById("confirmar");
    let limpiar = document.getElementById("limpiar");
    let header = document.getElementById("headerCarro");
    let mostrar = document.getElementById("mostrar");
    tablaCarro.innerHTML= "";
    mostrar.innerHTML="refrescar Carro";

    confirmar.hidden = false;
    header.hidden = false;
    limpiar.hidden = false;

    let ultima= 0;
    let total = 0;
   
    
    for(i=0; i<carro.length; i++){
        let row = tablaCarro.insertRow(i);
        
        row.innerHTML = `<div>COMPRA NUMERO ${i} :</div>`;

        row.insertCell(0).innerHTML = `<br> Producto: ${carro[i].producto}`;
        row.insertCell(1).innerHTML = `<br> Subtotal: ${carro[i].subtotal}`;
        row.insertCell(2).innerHTML = `<br> cantidad: ${carro[i].cantidad}`;
        
        ultima += i;
        total += carro[i].subtotal;
    }
    //NO se por que necesito esta validacion pero sino se rompe
    if(ultima<2) ultima = ultima+1;
    let ultimaFila = tablaCarro.insertRow(ultima);
    ultimaFila.innerHTML = "TOTAL A Pagar:"+total;
    totalAPagar = total;
}

function esconderCarro(){
    let confirmar = document.getElementById("confirmar");
    let limpiar = document.getElementById("limpiar");
    let header = document.getElementById("headerCarro");
    let mostrar = document.getElementById("mostrar");
    tablaCarro.innerHTML= "";

    mostrar.hidden = true;
    limpiar.hidden = true;
    header.hidden= true;
    confirmar.hidden= true;

}
//A partir de aca  es un desastre

function confirmarCompra(){

    //ES HORRIBLE PERO ES LO QUE SE PUDO CON EL TIEMPO, lA IDEA ES QUE SEA MAS DINAMICO Y TRABAJARLO CON LA VISTA DETAIL QUE AL FINAL NO LA USE
    //IF PARA TARJETA, CON CARGA DE VISTA PARA TARJETA, OTRO IF ADENTRO PARA LA MUESTRA DE DESCUENTO TAMBIEN
    //asumi que no habia descuento para efectivo
    if(confirm("Abona con tarjera de credito?")){
        let cuotas = prompt("cuantas cuotas desea ?");
        let tablaDetalle= document.getElementById("detalleDeCompra");
        let headerDetalle= document.getElementById("headerDetalle");
        let finalizar = document.getElementById("finalizar");
        finalizar.hidden = false;
        tablaDetalle.hidden = false;
        headerDetalle.hidden = false;
        tablaCarro.innerHTML= "";
        esconderCarro();
        //FALTA LA VALIDACIONDE CUPON, TAREA PARA CASA 
        if(confirm("tiene cupon de desuento?")){
            let cupon = prompt("Ingrese cupon");
            let ultima = 0;
            let total = 0;
            for(i=0; i<carro.length; i++){
                let row = tablaDetalle.insertRow(i);
                
                row.innerHTML = `<div>COMPRA NUMERO ${i} :</div>`;
        
                row.insertCell(0).innerHTML = `<br> Producto: ${carro[i].producto}`;
                row.insertCell(1).innerHTML = `<br> Subtotal: ${carro[i].subtotal}`;
                row.insertCell(2).innerHTML = `<br> cantidad: ${carro[i].cantidad}`;
                
                ultima = ultima + i;
                total += carro[i].subtotal;
            }
            //NO se por que necesito esta validacion pero sino se rompe
            if(ultima<2) ultima = ultima+1;
            let filaDescuento = tablaDetalle.insertRow(ultima);
            let descuento = total * descuentoCupon;
            totalFinal = total - descuento;
            filaDescuento.innerHTML = "DESCUENTO:"+descuento;

            let filaTotal = tablaDetalle.insertRow(ultima+1);
            filaTotal.innerHTML = "Total a pagar:"+totalFinal;

            let filaPorMes = tablaDetalle.insertRow(ultima+2);
            filaPorMes.innerHTML = "TOTAL A PAGAR POR MES:"+totalFinal/cuotas;

            let filaTotalSinDescuento =  tablaDetalle.insertRow(ultima+3);
            filaTotalSinDescuento.innerHTML = "TOTAL A PAGAR SIN DESCUENTO"+ total;
        }
        else{
            let ultima = 0;
            let total = 0;
            for(i=0; i<carro.length; i++){
                let row = tablaDetalle.insertRow(i);
                
                row.innerHTML = `<div>COMPRA NUMERO ${i} :</div>`;
        
                row.insertCell(0).innerHTML = `<br> Producto: ${carro[i].producto}`;
                row.insertCell(1).innerHTML = `<br> Subtotal: ${carro[i].subtotal}`;
                row.insertCell(2).innerHTML = `<br> cantidad: ${carro[i].cantidad}`;
            
                ultima = ultima + i;
                total += carro[i].subtotal;
            }
            //NO se por que necesito esta validacion pero sino se rompe
            if(ultima<2) ultima = ultima+1;
            let ultimaFila = tablaDetalle.insertRow(ultima);
            ultimaFila.innerHTML = "TOTAL A PAGAR POR MES:"+total/cuotas;
        }
    }else{
        let ultima = 0;
        let total = 0;
        let finalizar = document.getElementById("finalizar");
        let tablaDetalle= document.getElementById("detalleDeCompra");
        let headerDetalle= document.getElementById("headerDetalle");
        tablaDetalle.hidden = false;
        headerDetalle.hidden = false;
        finalizar.hidden = false;
        tablaCarro.innerHTML= "";
        esconderCarro();
        for(i=0; i<carro.length; i++){
            let row = tablaDetalle.insertRow(i);
            
            row.innerHTML = `<div>COMPRA NUMERO ${i} :</div>`;
    
            row.insertCell(0).innerHTML = `<br> Producto: ${carro[i].producto}`;
            row.insertCell(1).innerHTML = `<br> Subtotal: ${carro[i].subtotal}`;
            row.insertCell(2).innerHTML = `<br> cantidad: ${carro[i].cantidad}`;
            
            ultima += i;
            total += carro[i].subtotal;
        }
        //NO se por que necesito esta validacion pero sino se rompe
        if(ultima<2) ultima = ultima+1;
        let ultimaFila = tablaDetalle.insertRow(ultima);
        ultimaFila.innerHTML = "TOTAL A Pagar:"+total;
        totalAPagar = total;
    }
}

function finalizar(){
    if(confirm("Seguro que te queres ir?")){
        alert("CHAU CHAUUUUU");
        window.location.replace("http://google.com");
    }
}