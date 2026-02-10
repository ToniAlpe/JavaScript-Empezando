// ---- ASAMBLEA ----
//alert ("Hola Mundo") No funciona porque es un visualizador (solo funciona en navegadores)
console.log ("Hola Mundo");

//let correcta = "ok"; No hace falta declarar las variables (en este caso es un String, en un programa grande a lo mejor se rompe)

// --- VARIABLES ---
let VariableReasignable = "Soy una variable reasignable.";
const constante = "Soy una constante";

//Imprimir las variables (lo mismo que ne java)
console.log(VariableReasignable);
console.log(constante);

VariableReasignable = 2; //Cambio de variable (no hay que hacer un casting como en java (tipado fuerte)) (tipado dinamico/debil)
console.log(VariableReasignable);

// --- NO HACER ---
//constante = 100;
//console.log (constante);

// --- TIPOS DE DATOS ---

// Primitivos (los mas simples) No primitivos (los mas complejos que se forma a partir de los primitivos)

console.log("1" + 1); //No es seguro pero si es facil

//typeof --> ver el ipo de la variable
let myVariable = 100;
console.log(typeof myVariable);
//La variable es un tipo number (numero)

myVariable = myVariable.toString();
console.log(typeof myVariable);
//La variable es un String (cadena de texto)

// --- OPERADORES ORDINARIOS ---

let manzanas = 5;
console.log("Tengo " + manzanas++ + " manzanas."); // Muestra 5, pero ahora hay 6
console.log("Ahora tengo " + manzanas + " manzanas."); // Muestra 6

let peras = 5;
console.log("Voy a añadir una pera primero...");
console.log("Ahora tengo " + ++peras + " peras."); // Muestra 6 directamente


/*
EJERCICIO 1-VARIABLES Y TIPOS DE DATOS
*/

console.log("--- Ejercicio 1 ---");

// 1. Escribe un comentario que ocupe una sola línea.

// Esto es un comentario

// 2. Escribe un comentario que abarque varias líneas de texto.

/*Este comentario
ocupa 2 lineas*/

// 3. Declara variables y asígnales valores correspondientes a todos los tipos de datos primitivos.

let text = "Hola, me llamo Antonio";

let number = 19;

let bignumber = 164947639393783220n;

let boolean = false;

let notDefined;


// 4. Muestra en la consola los valores de todas las variables que has declarado.

console.log(text);
console.log(number);
console.log(bignumber);
console.log(boolean);
console.log(notDefined);

// 5. Muestra en la consola el tipo de dato de cada una de las variables.

console.log(typeof text);
console.log(typeof number);
console.log(typeof bignumber);
console.log(typeof boolean);
console.log(typeof notDefined);

// 6. Cambia los valores de las variables por otros nuevos que sean del mismo tipo de dato.

text = "Hola, me llamo Pepe";

number = 20;

bignumber = 1234567n;

boolean = true;

// 7. Cambia los valores de las variables por otros nuevos que correspondan a tipos de datos diferentes.

text = 19;

number = "Hola, me llamo Antonio";

bignumber = "123";

boolean = 1234567n;

Defined = true;

// 8. Declara constantes y asígnales valores correspondientes a todos los tipos de datos primitivos.

const texto = "Hola, me llamo Antonio";

const numero = 19;

const numeroGrande = 164947639393783220n;

let booleano = false;

let noDefinido;

// 9. Intenta modificar los valores de las constantes declaradas anteriormente. Y // 10. Añade comentarios en las líneas de código que generen errores al ejecutarse.

//const texto = "Hola, me llamo Antonio"; NO SE PUEDE AL SER UNA CONSTANTE


/*
EJERCICIO 2-OPERADORES
*/

console.log("--- Ejercicio 2 ---");

/*
Vamos a crear una protocaluladora que junte todo lo visto sobre los operadores.
Antes de nada crea 2 variables para numeros enteros o decimales, lo que mas rabia te de.
*/

console.log (a = 2);
console.log (b = 5);


// 1. Empezaremos creando una variable para cada operacion aritmetica ej-> let suma = a + b

console.log("Suma");
console.log (suma = a + b);

console.log("Resta");
console.log (resta = a - b);

console.log("Multiplicación");
console.log (multiplicación = a * b);

console.log("División");
console.log (división = a / b);

console.log("Módulo");
console.log (módulo = a % b);

console.log("Exponenciación");
console.log (exponenciación = a ** b);

// 2. Ahora haz lo mismo pero aplicando operadores de asignacion no me seas flojin que tardas un segundo.

c = a + b;
console.log (a += b);
console.log (a -= b);
console.log (a *= b);
console.log (a /= b);
console.log (a %= b);
console.log (a **= b);


// 3. Ahora con los operadores de comparacion imprime 3 resultados verdaderos y tres falsos.

console.log(2 == "2");
console.log(2 == 2);
console.log(2===2);

console.log(5==="5");
console.log(2===5);
console.log(2 == "5");

// 4. Utiliza el operador lógico AND un operador OR y una mezcla de los dos para imprimir un true y un false.
a = 2;
b = 5;
c = 6;
d = 1;
console.log(c > a && d < b);

console.log(c > a || d < b);

// 5. Niegame algo de los anteriores para que de el valor contrario pillin.

console.log(!(c > a || d < b));

// 6. Si te ves valiente usa el operador ternario para que en un condicional anterior si es true muestre un mensaje y si es false otro.
// Si el profe se rie con el mensaje caen mas puntos obviamente.






/*
EJERCICIO 3-STRINGS
*/


// 1. Concatena dos cadenas de texto

let cadena = "Antonio";
let cadena2 = "19";
console.log(`Hola, me llamo ${cadena} y tengo ${cadena2} años.`);

// 2. Muestra la longitud de una cadena de texto

console.log(cadena.length);

// 3. Muestra el primer y último carácter de un string

console.log(cadena[0]);
console.log(cadena[6]);

// 4. Crea una cadena de texto en varias líneas



// 5. Interpola tu nombre y edad -> 'Hola mi nombre es ....... y tengo ........ años. (Usa variables)

cadena = "Antonio";
cadena2 = "19";
console.log(`Hola, me llamo ${cadena} y tengo ${cadena2} años.`);

// 6. Convierte la cadena anterior a mayusculas y a minusculas


// 7. Reemplaza todos los espacios en blanco de un string por guion bajos.


// 8. Mira si tu string tiene una palabra concreta.


/*

EJERCICIO 4-ARRAYS
*/

// 1. Crea un array que almacene cinco animales y muestralo como lista en tu HTML.

// 2. Añade dos más. Uno al principio y otro al final

// 3. Elimina el que se encuentra en tercera posición

// 4. Muestra en consola la cantidad de elementos que tiene el array

// 5. Accede e imprime el segundo y el último elemento del array

// 6. Modifica el tercer elemento del array por "Panda"

// 7. Elimina el primer elemento del array con shift() y muéstralo

// 8. Ordena el array alfabéticamente y muéstralo

// 9. Invierte el orden del array y muéstralo

// 10. Comprueba si "Tigre" está en el array con indexOf() e includes(), e imprime el resultado