/*
    Clase 8 del martes 

    hoy vimos acciones primitivas y tipos de dato primitivos

*/

//practica 1-6 B
// defino una variable llamada "nombre variable" y la inicializo con un valor literal de "el tipo de dato que use"
var palabra = "texto"; // tipo de dato string
var numero = 2; // tipo de dato int
var decimal = 3.4; // tipo de dato float
var booleano = true; // tipo de dato boolean


// practica 1-6 A
var respuesta = prompt("Ingrese su nombre", ["nombre"]);//escribe mediante el navegador

console.log( respuesta );// escribe algo mediante la consola

document.write(`
    <h4>Nombre: </h4>
    <h4>${ respuesta }</h4>   
`);


//consulta resuelta
/* if(0.1){ // valores decimales distintos de 0 igual los toma como verdadero
    console.log("otro mensaje");// escribi en una terminal
} */