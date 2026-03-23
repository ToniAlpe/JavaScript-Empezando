//Ejemplo 1
const contenedor=document.getElementById("contenedor")
let enlacecito = document.getElementById("enlace")
alert(contenedor.tagName);
console.log(enlacecito.tagName);

//Ejemplo 2
// const cabecera=document.getElementById("cabecera");
// alert(cabecera.innerHTML);

const cabecera=document.getElementById("cabecera");
nombreVistante=prompt("Hola, como te llamas.")
//CAMBIO DE NOMBRE
cabecera.innerHTML=`<h1>Bienvenido ${nombreVistante}</h1>`;