//Bucle for


for(let i=0; i<40; i++){
    console.log('hola.')
}


let colores = [];

// console.log(colores[0]);
// console.log(colores[1]);
// console.log(colores[2]);


for(let i=0; i<colores.length; i++){
    console.log(colores[i])
}

//Practica for
//10 múltiplos de 2 ¿Qué parte del bucle for modificarías para que i varíe de 2 en 2.

// for (let i=2; i<=20; i++){
//     if(i%2 == 0){
//         console.log('valor de i:' +i);
//     }

// }


//Tablas de multiplicar usando for. Tenenos que mostrar en consola un array con los resultados.

let tabla = [];
let base = 4;

for (let i=1; i<11; i++){
    tabla.push( base * i)
}

console.log(tabla);

function tablaDeMultiplicar(base){
    let resultados = [];

    for (let i=1; i<11; i++){
        resultados.push( base * i)
    }

    return resultados
}

// console.log( tablaDeMultiplicar(2) );
// console.log( tablaDeMultiplicar(3) );
// console.log( tablaDeMultiplicar(4) );
// console.log( tablaDeMultiplicar(5) );

// for (let i=1; i<11;i++){
//    console.log( 'La tabla del ' + i + ': ' + tablaDeMultiplicar(i) );
// }

let alumnos = [
    {
        nombre: 'Ale',
        materia: 'Progra 1'
    },
    {
        nombre: 'Brian',
        materia: 'Progra 1'
    },
    {
        nombre: 'Felipe',
        materia: 'ITCD'
    },
    {
        nombre: 'Carolina',
        materia: 'GPD1'
    }
]

//Mostrar por conosla el nombre de todos los alumnos

for(let i=0; i<alumnos.length ;i++){
    console.log( 'El nombre del alumno es: ' + alumnos[i].nombre );
}
