//Tipos de datos basicos 
let nombre:string = "Andrea";
console.log(nombre);
nombre = "Melissa";
console.log(nombre);


//declaraciones 
// function sumar(valor1:number, valor2:number):number{
//     return valor1+valor2
// }

let sumar = (valor1:number,valor2:number):number=>{
    return valor1+valor2;
}
console.log(sumar(10,2));