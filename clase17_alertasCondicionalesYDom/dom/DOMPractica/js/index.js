alert("Bienvenidos a mi sitio.")

let continuar = confirm("¿Está seguro de querer avanzar?")
//1 capturo
let titulo = document.querySelector("h2");

if(continuar == true){
    
    //2 que modificar
    titulo.innerText = "Qué alegría que quieras continuar tu visita";
} else {

    //2 que modificar
     titulo.innerText = "Lamentamos que no quieras continuar tu visita";
}