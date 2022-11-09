//Detalle de un personaje
//Obtengo la qs
let queryString = location.search

//Construyo un objeto literal
let qsObject = new URLSearchParams(location.search)

//obtengo el id de la propiedad del objeto literal
let id = qsObject.get('id')

//endpoint con el id de la qs
let url = `https://rickandmortyapi.com/api/character/${id}`

//fetch
fetch(url)
 .then(function(res){
    return res.json();
 })
 .then(function(data){
    console.log(data);
    
    //capturar cada elemento del html que queremos completar
    let nombre = document.querySelector('h1');
    let status = document.querySelector('.status');
    let especie = document.querySelector('.especie');
    let img = document.querySelector('img');

    // Agregar la información de la api y mostrarlo en el html
    nombre.innerText = data.name;
    status.innerText += data.status;
    especie.innerText += data.species;
    img.src=data.image;
    

 })
 .catch(function(e){
    console.log(e);
 })

 
 //Favoritos
let favoritos = []

//Si ya hay datos de favoritos
let recuperStorage = localStorage.getItem('personajesFavs')

//Puede tener o no
if(recuperStorage !== null){
   favoritos = JSON.parse(recuperStorage)
}

let boton = document.querySelector('button');

//Si el id está en el array cambiamos el texto del botón
if(favoritos.includes(id)){
   boton.innerText = "Quitar de favoritos"
}

boton.addEventListener('click', function(){

   //chequear si el id ya está en lista y cambiar el texto del botón
   if(favoritos.includes(id)){
      //Sacar de favoritos
      let indiceDelPersonaje = favoritos.indexOf(id);
      favoritos.splice(indiceDelPersonaje, 1)
      boton.innerText = 'Agregar a favoritos';

   } else {
      //Guardar el id del presonaje en el array
         favoritos.push(id);
         boton.innerText = 'Quitar de favoritos';
   }

   //Guardar datos en localStorage
   let favsToString = JSON.stringify(favoritos)
   localStorage.setItem('personajesFavs',favsToString)
   
   console.log(localStorage);

})
