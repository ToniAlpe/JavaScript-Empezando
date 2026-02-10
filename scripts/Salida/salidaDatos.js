console.log("HoliwiUWU");

console.info("Soy INFO")
//Mensaje informativo.
console.debug("Debuggeando")
//Mensaje de depuración (puede estar oculto por defecto).
console.warn("ALERTA, ALERTA!")
//Mensaje de advertencia (se muestra con un icono amarillo).
console.error("Ya has roto algo")
//Mensaje de error (se muestra con un icono rojo).

/* NO FUNCIONA
document.write("Hola mundo");
document.write("<h1>Hola mundo</h1>");*/

// SI FUNCIONA
let nombre = "German"
document.body.innerHTML += `Hola mundo ${nombre}`;