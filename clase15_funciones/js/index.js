//console.log('hola');

//Funciones
//Declaración
function sumar(num1, num2){
    let resultado = num1 + num2;
    console.log('sumé '+ num1 + ' y ' + num2);

    return resultado;
}


//Ejecución
// console.log(sumar(2,4));
// console.log(sumar(7,4));
// console.log(sumar(1231231,46734364));
// console.log(sumar(0,6));
//console.log(sumar());


function bienvenida(nombre, apellido){
    let saludar = 'Hola ' + nombre + ' ' + apellido
  
    return saludar
}

let bienvenidaAzu = bienvenida('B', 'Azu');
let bienvenidaBrian = bienvenida('W', 'Brian');

//console.log(bienvenidaAzu);
//console.log(bienvenidaBrian);


//Scope de variables.

let nombre = 'Brian';

function despedida (nom){
    let frase = 'Hasta la próxima ' + nom
    //console.log('Este es el console log: ' + frase);
    //console.log('Este es el console log de la variable nombre: ' + nombre);
    return frase 
}

//console.log(frase);
//console.log(nombre);
console.log( despedida('Fran'));


