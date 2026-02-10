//--- EJERCICIO 1 ---
function rectangulo() {
    let alto = prompt("Añada el alto (del objeto)");
    let ancho = prompt("Añada el ancho (del objeto)");
    let superficie = ancho * alto;
    console.log(superficie);
    document.body.innerHTML += `<h1>La superficie del rectangulo es: ${superficie} </h1>`;
}

rectangulo();
//--- EJERCICIO 2 ---

let peso = prompt("Añada el peso (en kg)");
let altura = prompt("Añada la altura (en cm)");
let imc = peso / (((altura/100)**2));

alert("Su índice de masa muscular es: " + imc);

//--- EJERCICIO 3 ---


