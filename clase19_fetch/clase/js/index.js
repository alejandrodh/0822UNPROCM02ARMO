let url ='https://randomuser.me/api/'

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        console.log(data.results[0]);
        let nombre = document.querySelector('.name')
        nombre.innerText += data.results[0].name.first

        let avatar = document.querySelector('.avatar')
        avatar.src = data.results[0].picture.large

    })
    .catch(function(e){
        console.log(e);
    })





let provincias ='https://apis.datos.gob.ar/georef/api/provincias'

fetch(provincias)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        
        let lista = document.querySelector('.lista')
        let elementosLista = ''

        for (let i = 0; i < data.provincias.length; i++) {
            elementosLista += `<li> ${data.provincias[i].nombre} </li>`            
        }
        console.log(elementosLista);
        lista.innerHTML = elementosLista

    })
    .catch(function(e){
        console.log(e);
    })