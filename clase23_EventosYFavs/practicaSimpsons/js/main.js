// completar las variables para que el programa funcione

window.addEventListener('load', function() {

// 1) Cuando pase el mouse por el título "Empecemos" se dispare un mensaje preguntándole el nombre
    // Capturar el título y asignarle el evento correspondiente
    // Dentro del evento, disparar un prompt con  mensaje "¿CÓMO TE LLAMÁS?"
    // Guardar el dato en la variable nombre.

    //capturar HTML 
    let titulo = document.querySelector('#titulo');
    titulo.addEventListener('mouseover', function(){
        let nombre = prompt('¿Cómo te llamás?')
        console.log(nombre);
        // 2) Si no completa nada, darle la bienvenida con un mensaje genérico. Si completa con su nombre, darle una bienvenida personalizada
       
           // Capturar el párrafo con id "saludo" y guardarlo en la variable saludo
           // Usar un condicional para evaluar qué hay en la variable nombre
           // Si está vacía, escribir dentro del párrafo el texto "BIENVENID@"
           // Si no, escribir dentro del párrafo el texto "BIENVENID@ USUARIO", en donde USUARIO deberá ser reemplazado por el nombre que ingresó
        let saludo = document.querySelector('#saludo');

        if(nombre == '' || nombre == null){
            saludo.innerText = 'Bienvenid@'
        } else {
            // saludo.innerText = 'Bienvenid@' + nombre
            saludo.innerText = `Bienvenid@ ${nombre}`;
            saludo.style.textTransform = 'uppercase';
        }

        titulo.style.display = 'none';
        let span = document.querySelector('span');
        span.style.display = 'inline';




    })

 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
    //let boton = ;
 
 
 }) 