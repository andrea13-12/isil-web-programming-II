"use strict";
//Tipos de datos basicos 
let nombre = "Andrea";
console.log(nombre);
nombre = "Melissa";
console.log(nombre);

//
//Crear una clase
class Mascota {
    //Abstracción
    constructor(nombre,edad,tipo){
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    //Creando los métodos - Función
    presentarse(){
        console.log(`Hola soy ${this.nombre} tengo ${this.edad} años de edad y soy un ${this.tipo}`);
    }
}

//Herencia
class Perro extends Mascota{
    constructor(nombre,edad,raza){
        super(nombre,edad,'perro');
        this.raza = raza;
    }
    hacerSonido(){
        console.log(`${this.nombre} Guau Guau!!!`);
    }
    correr(){
        console.log(`${this.nombre} está corriendo alegremente!!!`);
    }
}


//Crear un objeto - new
let miPerro = new Mascota('Bony',5,'Labrador Retriever');
console.log(miPerro);
miPerro.presentarse();


let miOtroPerro = new Perro('Firulais',3,'Bulldog');
console.log(miOtroPerro);
miOtroPerro.correr();
miOtroPerro.hacerSonido();
