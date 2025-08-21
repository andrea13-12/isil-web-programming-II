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

//Todo lo que hemos aprendido sobre JS, lo podemos utilizar en Ts
// window.alert() - window.prompt() - window.confirm() (nosotros no colocamos palabra window porq java lo tiene)
//App para determinar el aumento de sueldo de un trabajador
let miFamilia:string[] = ['leo', 'chewie','rocky','mamá'];
console.log(miFamilia);

let cualquierDato:any = 'Esto es una cadena de texto';
cualquierDato= 58;
cualquierDato= true;

enum meses{
    Enero,
    Febrero,
    Marzo,
    Abril,
    Mayo
}
console.log(meses);
console.log(meses.Febrero);
console.log(meses[4]);

//Union - (Multiples tipos de datos)
let variosTiposDatos:string | number | boolean = 'Perú';
variosTiposDatos = 20;
variosTiposDatos = true

type coordenadas = {
    
}
let miUbicaciion:coordenadas = {
    latitud: 20,
    longitud: 30
}

console.log(miUbicaciion);

