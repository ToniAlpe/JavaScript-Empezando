//--- Funciones ---

// -- Definición --

/*function nombreFuncion (//parametro1, parametro2,...)
{
//AQUI LAS INSTRUCCIONES DE LA FUNCION
}*/

// function saludar() {
// console.log("Hola, soy una función");
// }
// // Ejecución de la función
// //Como vemos se ejecuta la funcion llamandola por su nombre seguido de ()
// saludar();

// // -- Ejemplos --

// //Funcion para calcular el iva
// function SumarIVA (cantidad, porcentaje)
// {
// let total;
// total=cantidad+cantidad*porcentaje/100;
// alert(total);
// }
// SumarIVA (400,18);

// //Funcion para saber cual es mayor
// function ElMayor (num1, num2)
// {
// if(num1>num2)
// {
// alert(num1+" es el mayor");
// }else{
// alert(num2+" es el mayor");
// }
// }
// ElMayor (4,7);
//Le pasamos los parametras cuando llamamos la funcion

// -- Devoluciones de valores --

function sumar(a, b) {
return a + b; // Devolvemos la suma de a y b al exterior
console.log("Suma realizada."); // Este código nunca se ejecutará
}
// Ejecución
let resultado = sumar(5, 5); // Se guarda 10 en la variable resultado
console.log("Resultado = ", resultado); // Resultado = 10

//Lo mismo que antes solo que ahora tiene el return
function SumarIVA (cantidad, porcentaje)
{
let total;
total=cantidad+cantidad*porcentaje/100;
return total; //SALIDA
}
//PODEMOS USAR DICHA SALIDA COMO QUERAMOS
let resultadoIVA = SumarIVA (400,18); //Gracias al return podemos guardarlo en una variable
console.log(resultadoIVA) //Se muestra por pantalla esa variable

//-- Variables locales y globales --
function ElMayor (num1, num2)
{
let mayor; //Primero creamos nuestra variable local
// en la cual guardaremos nuestro numero mayor
if(num1>num2)
{
mayor=num1;
}else{
mayor=num2;
}
return mayor;
}
let ganador = ElMayor(4,7);

//-- Parametros por defecto --

function mensajito (persona, texto = "sin texto dado") {
console.log(persona + ":" + texto);
}
mostrarMensaje("German"); // German: sin texto dado
mostrarMensaje("German","Paquete"); // German: Paquete