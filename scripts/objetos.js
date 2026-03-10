//--- Objetos ---

// --Definición --

// const objeto = {
// clave1: "valor1",
// clave2: "valor2"
// };

// const micoche = {
// name: "Fiat",
// model: "500",
// weight: 850,
// color: "white"
// };

// // -- Otra forma de crear objetos --

// // let nombre = "Alfonso";
// // let edad = 39;
// // const persona = { nombre, edad };

// // const persona={
// // nombre: "Alfonso",
// // edad: 39
// // }
// //Esta de aqui es mejor

// // -- Manejo basicos de objetos --

// console.log(micoche.name); // Muestra "Fiat"
// console.log(micoche.color); // Muestra "white"

// console.log(micoche["name"]); // Muestra "Fiat"
// console.log(micoche["color"]); // Muestra "white"

// const micoche = { "marca favorita": "Fiat" };
// console.log(micoche["marca favorita"]); // Muestra "Fiat"
// console.log(micoche.marca favorita); //Caca de la vaca

// //-- Manipulacion de objetos --

// //Modificar información del objeto
// micoche.model="500C";
// micoche["model"]="500C";

// //Añadir propiedades

// micoche.puertas=3;
// micoche["dueño"]="German"

// //Borrar propiedades (delete)

// delete micoche["dueño"];
// delete micoche.puertas;

// //-- Operador IN --

// const user = { name: "John", age: 30 };
// console.log("age" in user);
// // mostrará "true", porque user.age sí existe
// console.log("blabla" in user);
// // mostrará false, porque user.blabla no existe

// //-- Funcion como valo de un objeto --

// // const usuario = {
// // name: “German",
// // decirHoli: function() {
// // console.log(“Holiwi!");
// // }
// // };
// // usuario.decirHoli(); // Holiwi!

// // const usuario = {
// // name: "German",
// // decirHoli: function(name) {
// // console.log(`Holiwi! Soy ${name}.`);
// // }
// // };
// // usuario.decirHoli(usuario.name);
// // // Holiwi! Soy German.

// //-- Iterar sobre objetos --

// const usuario = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };

// //Busca por indice
// for (let clave in usuario) {
//     console.log(clave); // name, age, isAdmin
//     console.log(usuario[clave]); // John, 30, true
// }

//-- Iterar sobre un array de objetos --

// const usuarios = [
// {
//     name: "John",
//     age: 30,
//     isAdmin: true
// },
// {
//     name: "Alice",
//     age: 25,
//     isAdmin: false
// }
// ……………
// ];

// for (let i = 0; i < usuarios.length; i++) {
// console.log(`Usuario número: ${i} se llama
// ${usuarios[i]["name"]}`);
// }

// //Coge el valor
// for (let usuario of usuarios) {
// console.log(`Usuario: ${usuario["name"]}`);
// }

//Ejemplo completo

const usuarios = [
{
    name: "John",
    age: 30,
    isAdmin: true
},
{
    name: "Alice",
    age: 25,
    isAdmin: false
}
];

for (let usuario of usuarios) { // USAMOS EL FOR OF PARA RECORRER A LOS OBJETOS DENTRO DEL ARRAY
    console.log(`Usuario:`);
    for (let propiedad in usuario) { // USAMOS EL FOR IN COMO HEMOS VISTO ANTES PARA RECORRER DICHO ARRAY
        switch (propiedad) {
        case "name":
            console.log(`Nombre: ${usuario[propiedad]}`);
        break;
        case "age":
            console.log(`Edad: ${usuario[propiedad]} años`);
        break;
        case "isAdmin":
            console.log(`Es administrador: ${usuario[propiedad]}`);
        break;
        }
    }
}