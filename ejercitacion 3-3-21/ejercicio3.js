let texto = "hollaa";



function ejercicio3(texto){
    if(typeof texto === 'string'){
        if(texto === texto.toUpperCase()){
            console.log("el texto esta todo en mayuscula");
        }
        else{ 
            if(texto === texto.toLowerCase()){
                console.log("el texto esta todo en minuscula");
            }
            else{
                console.log("texto tiene caracteres mixtos");
            }
        }
    }
    else{
        console.log("no es una cadena de texto");
    }  
}

ejercicio3(texto);