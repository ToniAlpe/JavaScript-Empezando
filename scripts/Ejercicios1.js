//--- EJERCICIO 1 ---
function rectangulo() {
    let alto = prompt("Añada el alto (del objeto)");
    let ancho = prompt("Añada el ancho (del objeto)");
    let superficie = ancho * alto;
    //console.log(superficie);
    document.body.innerHTML += `<h1>La superficie del rectangulo es: ${superficie} </h1>`;
}

//--- EJERCICIO 2 ---
function masaMuscular () {
    let peso = prompt("Añada el peso (en kg)");
    let altura = prompt("Añada la altura (en cm)");
    let imc = peso / (((altura/100)**2));

    alert("Su índice de masa muscular es: " + imc);
}

//--- EJERCICIO 3 ---
function segundos () {
    let segundosTotales = prompt("Introduce el número de segundos:");

    let horas = parseInt(segundosTotales / 3600);
    let minutos = parseInt((segundosTotales % 3600) / 60);
    let segundos = segundosTotales % 60;

    //console.log(`Han pasado ${horas} horas, ${minutos} minutos, ${segundos} segundos`);
    document.body.innerHTML += `Han pasado ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

//--- EJERCICIO 4 ---
function saludo () {
let nombre = prompt("Introduce tu nombre:");
let apellido = prompt("Introduce tu apellido:");

let saludo = `Hola ${nombre} ${apellido}, bienvenido a mi página web.`;

document.body.innerHTML = `<h1>${saludo}</h1>`;

let numeroLetras = saludo.length;
document.body.innerHTML += `<p>${numeroLetras}</p>`;

let primeraLetra = nombre[0].toLowerCase();
let apellidoMinuscula = apellido.toLowerCase();
let email = `${primeraLetra}.${apellidoMinuscula}@atlantidaformacionprofesional.es`;

alert(email);
}

//--- FUNCIONES LLAMADA ---
/*rectangulo();
masaMuscular();
segundos();*/
saludo();