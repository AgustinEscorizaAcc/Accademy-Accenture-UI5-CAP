const modelo = document.getElementById('modelo');
const codigo = document.getElementById('codigo');
const form = document.getElementById('form_ford');
const div = document.getElementById('div');
const fiesta = {
    modelo: 'Ford Fiesta',
    codigo: '11450',
    precio: '1350344',
    descuento: '0.05'
};
const focus = {
    modelo: 'Ford Fiesta',
    codigo: '11450',
    precio: '1350344',
    descuento: '0.05'
}
let autos =[];
autos.push(fiesta);
autos.push(focus);

function buscarAuto(){
    //puedo usar find por modelo o codigo en vez de asi y en todo el array
    let auto = autos.find( auto =>{
        return auto.codigo === codigo;
    });
    if(auto !== undefined){
        return auto;
    }
    else{
        auto = autos.find( auto =>{
            return auto.modelo === modelo;
        });
        if(auto !== undefined){
            return auto;
        }
        else{
            throw new Error("ese codigo/modelo no se encuentra en la BD");
        }
    }
}

form.addEventListener('sumbit', (e)=>{
    try{
        let auto = buscarAuto();
        console.log(auto);

    }catch(error){
        alert(error);
    }
})