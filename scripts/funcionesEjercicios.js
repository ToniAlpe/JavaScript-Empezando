//NORMAL MODE
console.log("---Ejercicio 1---")

function contarCaracteres(texto) {
    return texto.length;
}

let resultado1 = contarCaracteres("Me encanta JavaScript");
console.log(resultado1); 

console.log("---Ejercicio 2---")

function multiplicacion(a, b){
    return a * b;
}
let resultado2= multiplicacion(5,2);
console.log(resultado2);

console.log("---Ejercicio 3---")

function contarVocales(texto) {
    const vocales = "aeiouAEIOU";
    let contador = 0;

    for (let letra of texto) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales("ME encanta JavaScript")); 

console.log("---Ejercicio 4---")

function encontrarMaximo(array) {
    let maximo = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i];
        }
    }
    return maximo;
}

const numeros = [1, 3 ,12 ,8, 9, 14];
console.log(encontrarMaximo(numeros)); 

console.log("---Ejercicio 5---")

function sumarPares(array) {
    let suma = 0; 

    for (let numero of array) {
        if (numero % 2 === 0) {
            suma += numero; 
        }
    }
    return suma;
}

const misNumeros = [1, 3, 5, 10, 12, 7, 2]; 
console.log(sumarPares(misNumeros));

console.log("---Ejercicio 6---")

function contarLetra(frase, letra) {
    frase = frase.toLowerCase();
    letra = letra.toLowerCase();
    let contador = 0;

    for (let caracter of frase) {
        if (caracter === letra) {
            contador++;
        }
    }

    return contador;
}

console.log(contarLetra("Estoy sufriendo con estos ejercios", "e"));
console.log(contarLetra("Me quieo morir", "m"));

console.log("---Ejercicio 7---")

function genContrasena(longitud) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let contrasena = "";

    for (let i = 0; i < longitud; i++) {
        let indiceAzar = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indiceAzar);
    }
    return contrasena;
}

console.log(genContrasena(15));

//INTERACCION CON HTML 
//Ejercicio 1
let textoEnlace = prompt("Introduce el texto: ");
let direccionWeb = prompt("Introduce una web: ");
let enlace = document.createElement("a")

enlace.textContent = textoEnlace;
enlace.href = direccionWeb;
enlace.target = "_blank";

document.body.appendChild(enlace);

//Ejercicio 2
const urlImagen = prompt("Introduce la URL de la imagen:");
const urlDestino = prompt("Introduce la dirección web:");

const contenedor = document.createElement("p"); 
const enlace1 = document.createElement("a");    
const imagen = document.createElement("img"); 

imagen.src = urlImagen;
imagen.style.maxWidth = "100%"; 

enlace1.href = urlDestino;
enlace1.target = "_blank"; 
contenedor.style.textAlign = "center";

enlace1.appendChild(imagen);    
contenedor.appendChild(enlace1);  
document.body.appendChild(contenedor);

//Ejercicio 3
let datos = ["agua", "zumo", "pepsi", "cocacola", "sprite"];
const desplegable = document.createElement("select");

for (let bebida of datos) {
    const opcion = document.createElement("option");

    opcion.textContent = bebida;
    opcion.value = bebida; 

    desplegable.appendChild(opcion);
}

document.body.appendChild(desplegable);

//HARD MODE

function lanzarDado() {
    // 1. Generamos el número aleatorio entre 1 y 6
    const resultado = Math.floor(Math.random() * 6) + 1;
    
    // 2. Buscamos la imagen en el HTML
    const imgElemento = document.getElementById("imagen-dado");
    
    // 3. "dice" seguido del número (las imagenes de los dados)
    imgElemento.src = `dados/dice${resultado}.png`; 
    
    // 4. (Opcional) Mostrar un mensaje en la consola para comprobar
    console.log("Ha salido el archivo: dice" + resultado + ".png");
}