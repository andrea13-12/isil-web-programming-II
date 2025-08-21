// Llamando a un módulo nativo
const fs = require('fs');
// import * as fs  from 'node:fs';

let nombre = "Andrea";
let apellido = "Torres";
let edad = 23;

console.log(`Hola mi nombre es: ${nombre} ${apellido} y tengo ${edad} años de edad`);
let valor1 = 10;
let valor2 = 20;
console.log(`La sumatoria de ${valor1} + ${valor2} = ${valor1 + valor2}`);
// Funciones - Declaracón - Expresión  - Arrow function
function sumar(valor1, valor2){
    return valor1 + valor2;
}
let restar = function(valor1,valor2){
    return valor1 - valor2;
}
let multiplicar = (valor1,valor2)=> valor1 * valor2;
let dividir = (valor1,valor2)=> valor1 / valor2;
console.log(sumar(200,500));
console.log(restar(700,100));
console.log(multiplicar(2,8));
// Callback
// Enviado por Nicolas
function calcular(valor1, valor2, operacion) {
    return operacion(valor1, valor2);
}
console.log('Utilizando Callback');
console.log(calcular(2,2,sumar));