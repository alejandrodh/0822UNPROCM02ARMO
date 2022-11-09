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
    let imagen = document.querySelector('img');

    // Agregar la información de la api y mostrarlo en el html
    nombre.innerText = data.name;
    status.innerText += data.status;
    especie.innerText += data.species;
    img.src=data.image;
    

 })
 .catch(function(e){
    console.log(e);
 })
