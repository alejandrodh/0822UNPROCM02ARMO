//Eventos
//console.log('hola');

//Donde: un elemento o datos de la ventana.
let titulo = document.querySelector('.main-title');
let parrafo = document.querySelector('p');

//Definir el evento y lo que queremos que suceda
titulo.addEventListener('click', function(){
    //Quiero cambiarle el color al texto del párrafo que capturé.
    parrafo.style.color = 'red';

})

//capturar el link y preguntarle al usuario si realmente quiere dejar la página.

let link = document.querySelector('a');
link.addEventListener('click', function(milanesa){
    milanesa.preventDefault()
    let respuesta = confirm('¿Realmente querés abandonar la página?')

    if (respuesta == false){
        alert('Qué bueno que te quedaste')
    } else {
        //redireccionar a la url del link. Investigar la propiedad de Window que redirecciona.
    }
})

//Detectar las teclas que toca el usuario
window.addEventListener('keypress', function(event){
    console.log(event.key);
})

//Dark Mode
let button = document.querySelector('button');
//console.log(button.innerText)
//Invertir colores
    //body tiene que tener fondo oscuro
let body = document.querySelector('body');
    //El color del texto debe ser claro.

button.addEventListener('click', function(){
    if(button.innerText == 'Dark Mode'){
        body.style.background = '#444';
        body.style.color = '#ccc';
        link.style.color = '#ccc';
        this.innerText= 'Light Mode';
    } else {
        body.style.background = '#fff';
        body.style.color = '#000';
        link.style.color = '#000';
        this.innerText= 'Dark Mode';  
    }
})

// button.addEventListener('dblclick', function(){
//     body.style.background = '#fff';
//     body.style.color = '#000';
//     link.style.color = '#000';
//     this.innerText= 'dark mode';
// })


//Guardar título en storage
let save = document.querySelector('.save');

save.addEventListener('click', function(){
    let soloElTexto = titulo.innerText;
    localStorage.setItem('tituloPagina', soloElTexto);
})