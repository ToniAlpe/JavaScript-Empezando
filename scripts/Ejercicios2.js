//Haz un programa que solicite un número al usuario. Luego, determina si el número es par o impar y muestra el resultado en la consola
let numero = prompt("Escribe cualquier número");

if (numero % 2 == 0) {
    alert("Es par");
} else {
    alert("Es impar");
}

/*Escribe un script que pregunte la edad del usuario. Si tiene 18 años o más,
muestra un mensaje diciendo "Puedes entrar a la discoteca". Si tiene menos
de 18, muestra "No puedes entrar te faltan ‘x años’". Además, si tiene 16 o
17, el mensaje debe decir "Puedes entrar con supervisión de un adulto"*/

let edad = prompt("Introduzca tu edad");

if (edad >=18) {
    alert("Puedes entrar a la discoteca");
} else if (edad == 16 || edad == 17) {
    alert("Puedes entrar con supervisión de un adulto");
} else if (edad < 18) {
    let diferenciaEdad = 18 - edad;
    alert("No puedes entrar, te faltan " + diferenciaEdad + " años");
} 

/*Crea un programa que pida un número del 1 al 7 y muestre el día de la semana
correspondiente (1 = lunes, 2 = martes, etc.). Si el número no está en el rango,
muestra un mensaje de error*/

let dia = prompt("Introduce un número (1-7)")

switch (true) {
    case dia == 1:
        alert("Lunes");
    break;
    case dia == 2:
        alert("Martes");
    break;
    case dia == 3:
        alert("Miercoles");
    break;
    case dia == 4:
        alert("Jueves");
    break;
    case dia == 5:
        alert("Viernes");
    break;
    case dia == 6:
        alert("Sabado");
    break;
    case dia == 7:
        alert("Domingo");
    break;
    default:
        alert("Error")
    break;
}

/*Haz un script que pida al usuario dos números y determine cuál es el mayor
o si son iguales. Muestra el resultado en la consola*/

let a = prompt("Introduce un número");
let b = prompt("Introduce otro número");

if (a > b) {
    alert("El numero " + a + " es mayor que " + b);
} else if (a < b) {
    alert("El numero " + a + " es menor que " + b);
} else {
    alert("El número " + a + " es igual que " + b);
}

/*Usa el operador ternario para asignar el valor "adulto" o "menor" a una
variable dependiendo de la edad. (TERNARIO OB)*/

let edad2 = prompt ("Dime un número para saber si eres un adulto o un menor");

edad2=(edad2>=18) ? alert("Adulto") : alert("Menor");

/*Muestra el número de días que tiene un mes dependiendo de la variable mes.
(SWITCH OB)*/

let mes = prompt("Dime el número del mes (ej. 1 = enero)")

switch (true) {
    case mes == 1:
        alert("Enero --> Tiene 31 días");
    break;
    case mes == 2:
        alert("Febrero --> Tiene 30 días");
    break;
    case mes == 3:
        alert("Marzo --> Tiene 31 días");
    break;
    case mes == 4:
        alert("Abril --> Tiene 30 días");
    break;
    case mes == 5:
        alert("Mayo --> Tiene 31 días");
    break;
    case mes == 6:
        alert("Junio --> Tiene 30 días");
    break;
    case mes == 7:
        alert("Julio --> Tiene 31 días");
    break;
    case mes == 8:
        alert("Agosto --> Tiene 30 días");
    break;
    case mes == 9:
        alert("Septiembre --> Tiene 31 días");
    break;
    case mes == 10:
        alert("Octubre --> Tiene 30 días");
    break;
    case mes == 11:
        alert("Noviembre --> Tiene 31 días");
    break;
    case mes == 12:
        alert("Diciembre --> Tiene 30 días");
    break;
    default:
        alert("Eres gilipollas, solo hay 12 meses subnormal");
    break;
}

/*Crea un programa que genere un número aleatorio entre 1 y 6 (como un
dado). Luego, pide al usuario que adivine el número. Si acierta, muestra
"¡Enhorabuena, ganaste 1 abracito!", si no, muestra "Fallaste paquete, el
número era X"*/

//1
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//imagina que quiero un numero entre el 1 y el 6. (restar el maximo menos ell minimo mas 1 y luego lo que te de le sumas el minimo)

//2
let numeroAleatorioEntero=numeroAleatorio*((6-1+1)+1);
console.log(numeroAleatorioEntero);

//Ahora toca quitarle los decimales

//3
let numeroAleatorioEnteroSinDec = Math.floor(numeroAleatorioEntero)
console.log(numeroAleatorioEnteroSinDec);

let adivinarNumero = prompt("Adivina el número que ha salido de un dado (1-6)")

if (numeroAleatorioEnteroSinDec == adivinarNumero) {
    alert("¡Enhorabuena, ganaste 1 abracito!")
} else if (adivinarNumero >= 7 || adivinarNumero <= 0) {
    alert("Eres gilipollas o que? Has leido la PUTA instrucción?")
} else {
    alert("Fallaste paquete, el número era: " + numeroAleatorioEnteroSinDec)
}

/*Crea un simulador de la bola 8 mágica. El usuario debe escribir una pregunta
en un prompt() y el programa debe responder con frases que se le ocurran al
alumno (preferiblemente graciosas). Haz unas 8 respuestas.
o Ej:
o Pregunta: ¿Es el ticher un mamomcete?
o Respuesta: Obviamente que sí, vaya pregunta.*/

