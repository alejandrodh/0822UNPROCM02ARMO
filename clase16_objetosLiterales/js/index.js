//1 console.log() solo sirve para mostar en cosola del navegador los que pongamos dentro de los paréntisis.
//console.log('hola');

let texto = 'lorem ipsum...';
let numero = 9123123123;
let decimal = 12312.12312;
let alumnoUdesa = true;
let nulo = null;
let noDefinido = undefined;

// tipos de datos más complejos

let array = [ 'Brian', 123, true, ['rojo','azul'], numero, texto]
array[0];
array[2];
array[4];

//console.log(array[0]);

// Funciones creación
    //Función declarada
    function suma(num1, num2){
        let resultado = num1 + num2
        return resultado
    }

    //Función expresada
    let multiplicar = function (pepe, juana){
                        let multi = pepe*juana;
                        return multi                        
                    }

// ejecución de una función
suma(2,6)
suma(numero, decimal); //ejecutando la suma con variables.

// Opciones para ver en conosla el resultado de una función
    //1 poner la ejecución dentro de console.log()
    console.log(suma(2,6));

    //2 colocar la ejecución dentro de una variable.
    let total = suma(8,9);
    console.log(total);

// Ejecución de f() expresada
multiplicar(4,10)
multiplicar(numero, decimal); //ejecutando la suma con variables.
console.log(multiplicar(numero, decimal));


//Objetos Literales
let materia = {
    nombre: 'Programación 1',
    profesores: ['Ale', 'Brian'],
    sede: 'Digital House',
    anio: 2022,
    semestre: 2,
    presentarse: function(){
        let frase = 'Los profesores de: ' + materia.nombre + ' son: ' + materia.profesores[0] + ' y ' + materia.profesores[1]
        return frase;
    }
}

materia.nombre
console.log(materia.nombre);
//Quiero ver los profesores de la materia
console.log(materia.profesores[0]);
console.log(materia.profesores[1]);
//console.log('Los profesores de: ' + materia.nombre + ' son: ' + materia.profesores[0] + ' y ' + materia.profesores[1]);
materia.presentarse()
console.log(materia.presentarse());


let materia2 = {
    nombre: 'ITCD',
    profesores: ['Ale M', 'Martín'],
    sede: 'Digital House',
    anio: 2022,
    semestre: 2,
    presentarse: function(){
        let frase = 'Los profesores de: ' + this.nombre + ' son: ' + this.profesores[0] + ' y ' + this.profesores[1]
        return frase;
    }
}

console.log(materia2.presentarse());


let materia3 = {
    nombre: 'GPD 1',
    profesores: ['Caro', 'Juanma'],
    sede: 'Digital House',
    anio: 2022,
    semestre: 2,
    presentarse: function(){
        let frase = 'Los profesores de: ' + this.nombre + ' son: ' + this.profesores[0] + ' y ' + this.profesores[1]
        return frase;
    }
}

console.log(materia3.presentarse());