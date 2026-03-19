//EASY MODE
let anime = {
    nombre: "Giyu Tomioka",
    edad: 21,
    estilo_combate: "Respiración del agua"
};

anime.katana = 1;

console.log(anime);
delete anime.edad;
console.log(anime);

anime.edad= 28;
console.log(anime);

console.log("nombre" in anime);     
console.log("pelo" in anime);   


//NORMAL MODE
function saludar () {
    return "Hola soy "+ anime.nombre + " y utilizo la " + anime.habilidad;
    
};

let giyu =saludar()
console.log(giyu)

for (let clave in anime) {
    console.log("Clave:", clave);
    console.log("Valor:", anime[clave]);
}

let pilar1 = {
    nombre: "Kyojuro Rengoku",
    edad: 20,
    informacion_clave: {   
        familia: "Hijo de un ex-pilar",
        estilo_combate: "Respiración de las llamas",
        demonio: "Akaza"
    }
};
let pilar2 = {
    nombre: "Kocho Shinobu",
    edad: 18,
    //Esto de aqui es una anidación
    informacion_clave: {   
        familia: "Familia muerta por un demonio",
        estilo_combate: "Aliento de insecto",
        demonio: "Doma"
    }
};

//HARD MODE
//Crea un Array con 3 objetos.

let pilares = [
    {
        nombre: "Giyu Tomioka",
        estilo_combate: "Respiración del agua",
        demonio: "Sigue vivo"
    },
    {
        nombre: "Sanemi Shinazugawa",
        estilo_combate: "Respiración del viento",
        demonio: "Sigue vivo"
    },
    {
        nombre: "Muichiro Tokito",
        estilo_combate: "Respiración de la niebla",
        demonio: "Kokushibo"
    }
];

console.log(pilares);

//Itera sobre dicho Array mostrando las propiedades de todos los objetos.
pilares.forEach((pilar, index) => {
    console.log(`Pilar ${index + 1}:`);
    for (let propiedad in pilar) {
        console.log(propiedad + ": " + pilar[propiedad]);
    }
    console.log("--------");
});

//He tenido que utilizar la IA para hacerlo, no sabia como hacer la tabla
let tablaHTML = `
    <table border="1">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Estilo de combate</th>
                <th>Demonio que lo mató</th>
            </tr>
        </thead>
        <tbody>
`;

pilares.forEach(pilar => {
    tablaHTML += `
        <tr>
            <td>${pilar.nombre}</td>
            <td>${pilar.estilo_combate}</td>
            <td>${pilar.demonio}</td>
        </tr>
    `;
});

tablaHTML += `</tbody></table>`;

document.body.innerHTML = tablaHTML;

//Quita lo de antes si no esto no funcionará (que comentes la tabla)
let pilar3 = {
    nombre: "Tengen Uzui",
    edad: 23,
    //Esto de aqui es una anidación
    informacion_clave: {   
        familia: "Familia ninja extinta",
        estilo_combate: "Respiración del sonido",
        demonio: "Sigue vivo"
    }
};

function saludar2(pilar, demonio) {
    return `Hola, soy ${pilar.nombre}, tengo ${pilar.edad} años y fui derrotado por ${demonio}`;
}

console.log(saludar2(pilar2, pilar2.informacion_clave.demonio));