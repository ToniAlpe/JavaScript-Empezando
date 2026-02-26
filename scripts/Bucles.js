//--- BUCLES ---

//-- WHILE --

/*while (condición) {
// Código a ejecutar
}*/

/*let i = 0; // Variable CONTADOR
// CONDICION
while (i < 5) {
console.log("Valor de i:", i);
// ITERACION
i++; // INCREMENTO
}

//CONTADOR
let i = 0;
while (i < 10) {
console.log("El número es " + i);
i++;
}

//Validación de datos
let edad = prompt("Introduce tu edad");
while (edad < 0 || isNaN(edad)) {
edad = prompt("Introduce tu edad");
}

//Entrada y comprobación
let secreta = "eureka";
let intento = "";
while (intento !== secreta) {
intento = prompt("¿Qué palabra es?");
}

//-- DO-WHILE --

/*let i = 1;
do {
console.log("Hola a todos");
i++;
console.log(i);
} while (i < 5);
console.log("Bucle finalizado");*/

//Confirmar usuario
/*let i = 1;
let respuesta;
do {
respuesta = confirm("¿Desea salir? Intento " + i);
i++;
} while (respuesta !== true);

//Valudacion de usuario
let usuario;
const usuarioReal="Geremin";
do {
usuario = prompt("Indica su usuario.");
} while (usuario!==usuarioReal);
Document.write(`<h1>Bienvenido ${usuario}</h1>`)

// --- FOR ---

/*for (inicialización; condición; incremento) {
// Código a ejecutar
}*/

/*for (let i = 0; i < 5; i++) {
console.log("Valor de i:", i);
}
//Es los mismo que esto
/*let i = 0;
while (i < 5) {
console.log("Valor de i:", i);
i++;
}*/

/*let lenguajes = ["HTML", "CSS", "JavaScript"];
// for basico-->Solo para arrays
//Recorre el array sabiendo su longitud (length).
for (let i = 0; i < lenguajes.length; i++) {
document.write(`<input type='button' value='${lenguajes[i]}'>`);
}
//for....in--> Funciona en arrays y objetos, no en colecciones
//Recorre el array a través de sus índices.
for (let posicion in lenguajes) {
document.write(`<input type='button' value='${lenguajes[posicion]}'>`);
}
// for...of--> Funciona en arrays y colecciones, no en objetos.
//Recorre los valores sin necesidad de saber sus índices.
for (let elemento of lenguajes) {
document.write(`<input type='button' value='${elemento}'>`);*/

//do while 1
/*let i = 0;

do {
    console.log("El número es " + i);
    i++;
} while (i < 10);

//do while 2
let edad;
do {
edad = prompt("Introduce tu edad");
} while (edad < 0 || isNaN(edad));


//do while 3
let secreta = "eureka";
let intento;
do {
intento = prompt("¿Qué palabra es?");
} while (intento !== secreta);

//--- Bucles anidados ---

for (let i = 0; i < 3; i++) { // Filas
let row = "";
for (let j = 0; j < 3; j++) { // Columnas
row += "* ";
}
document.write(`<p>${row}<p>`);
}*/

//--- EJERCICIOS ---
//Imprime numeros 1 al 20

// for (let i = 0; i <= 20; i++) {
//     console.log("Valor de i:", i);
// }

// //Suma 1 al 100

// let suma = 0;
// for (let i = 1; i <= 100; i++) {
//   suma += i; // Aumenta la suma con el valor actual de i
// }
// console.log("La suma de los números del 1 al 100 es: " + suma);

// //Crea un bucle que imprima todos los números pares entre 1 y 50

// for (let i = 2; i <= 50; i += 2) {
//   console.log(i);
// }

// //Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola (recuerda, se utiliza el for of para imprimir por pantalla los nombres y el for in los indices)

// let arrayNombre = [
//     "German",
//     "Antonio",
//     "Nacho", 
//     "Luis"
// ];

// for (let elemento of arrayNombre) {
//     console.log(elemento);
// }

// /*for (let posicion in arrayNombre) {
//     console.log(posicion);
// }*/

//Escribe un bucle que cuente el número de vocales en una cadena de texto
// while (true){
//     let texto = prompt("Añade la palabra: ")
//     let contador = 0;
//     for (let letra of texto) {
//         if ("aeiouáéíóúü".includes(letra.toLowerCase())){
//             contador++
//         }
    
//     }
//     if (texto=="salir"){
//         break
//     }
//     console.log(contador);
// }

//Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// let numeros = [1,7,9,5,6,7];
// let producto = 1;

// for (let i = 0; i < numeros.length; i++) {
//   producto *= numeros[i];
// }
// console.log("El producto total es:", producto);

//Escribe un bucle para hacer la tabla de multiplicar del 7

// let numero = 7;
// for (let i = 1; i <= 10; i++) {
//   console.log(numero + "X" + i + "=" + numero * i);
//   //console.log(`${numero} x ${i} = ${numero * i}`);
// }

//Crea un bucle que genere los 10 primeros números de la secuencia de Fibonacci (no terminado)

// let fibonacci = [
//     0, 
//     1, 
//     1, 
//     2, 
//     3, 
//     5, 
//     8, 
//     13,
//     21, 
//     34, 
//     55, 
//     89, 
//     144,
//     233, 
//     377, 
//     610, 
//     987, 
//     1597, 
//     2584, 
//     4181, 
//     6765, 
//     10946
// ];

// for (let sucesion of fibonacci) {
//     console.log(sucesion);
// }

//Haz un bucle para invertir una cadena de texto o un array lo que más coraje te dé.

// let cadena = promp("Introduzca una cadena de texto");
// let invertido = "";

// //Mirar si se puede con el for each
// for (let i = original.length - 1; i >= 0; i--) {
//     invertida += original[i];
// }
// console.log("Texto normal: "+texto);
// console.log("Texto invertido: "+ invertido);

//--- PATTERN PRINT ---

//Triángulo de asteriscos
let asteriscos = 5;
for (let i=1; i<=asteriscos; i++){
    let fila="";
    for (let j=1; j<=i; j++){
        fila += "*";
    }
    console.log(fila);
}
console.log("------------");
//TRIANGULO INVERTIDO DE ASTERISCOS
let asteriscos1 = 5;
for (let i=asteriscos1; i>=1; i--){
    let fila="";
    for (let j=1; j<=i; j++){
        fila += "*";
    }
    console.log(fila);
}
console.log("------------");
//CUADRADO DE ASTERISCOS 5X5
let asteriscos3 = 5;

for (let i = 0; i < asteriscos2; i++) {
  let fila = "";
  for (let j = 0; j < asteriscos2; j++) {
    fila += "*";
  }
  console.log(`${fila} \n`);
}
console.log("------------");

//NUMEROS EN ORDEN ASCENDENTE
let numerosAsc = 5;

for (let i = 1; i <= numerosAsc; i++) {
  let fila = "";
  for (let j = 1; j <= i; j++) {
    fila += j; 
  }
  console.log(fila);
}
console.log("------------");

//NUMEROS EN ORDEN DESCENDIENTE
let numerosDesc = 5;

for (let i = numerosDesc; i >= 1; i--) {
  let fila = "";
  
  for (let j = 1; j <= i; j++) {
    fila += j;
  }
  
  console.log(fila);
}