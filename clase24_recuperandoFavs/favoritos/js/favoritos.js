// favoritos
//Recuperar el array de favoritos
let recuperoStorage = localStorage.getItem('personajesFavs')
let personajes = JSON.parse(recuperoStorage);
console.log(personajes);

//Recorrerlo y prguntar por los datos de cada personaje
for(let i=0; i<personajes.length; i++) {
    //Recuperar y mostar en la pantalla los datos de cada personaje favorito.
        //Opción 1: 
        //buscarYMostrarFavoritos() //chequear como está armada la función para ver como ejecutarla

        //Opción 2:
        //Escribir el código directamente denrto del for.

}


function buscarYMostrarFavoritos(){
    //buscar un persnaje
    let url = `https://rickandmortyapi.com/api/character/${id}` // El id debe ingresar a la función por alguna parte ¿Por dónde?

    fetch(url)
     .then(function(res){
        return res.json()
     })
     .then( function(data){
        //Construir el bloque de html con los personajes y pasarlo al html para que se vean en pantalla.


        
     })
     .catch(function(error){
        console.log(error);
     })

}

    