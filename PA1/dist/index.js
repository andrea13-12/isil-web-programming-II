"use strict";


class FiguraGeometrica {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    obtenerNombre() {
        return this.nombre;
    }
}


class Rectangulo extends FiguraGeometrica {
    constructor(nombre, base, altura) {
        super(nombre);
        this.base = base;
        this.altura = altura;
    }
    
    calcularArea() {
        return this.base * this.altura;
    }
    
    obtenerDescripcion() {
        return `Tenemos el : ${this.nombre} , el cual cuenta con una base de : ${this.base} y una altura de: ${this.altura}.`;
    }
}


class Circulo extends FiguraGeometrica {
    constructor(nombre, radio) {
        super(nombre);
        this.radio = radio;
    }
    
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
    
    obtenerDiametro() {
        return this.radio * 2;
    }
}

// Creando Rectángulos
console.log("Creando Rectángulo 1...");
let rectangulo1 = new Rectangulo('Rectangulo 1', 5, 4);
console.log(`Nombre del rectángulo: ${rectangulo1.obtenerNombre()}`);
console.log(`Área del rectángulo: ${rectangulo1.calcularArea()}`);
console.log(`Descripción del rectángulo: ${rectangulo1.obtenerDescripcion()}`);
console.log('');

console.log("Creando Rectángulo 2...");
let rectangulo2 = new Rectangulo('Rectangulo 2', 6, 5);
console.log(`Nombre del rectángulo: ${rectangulo2.obtenerNombre()}`);
console.log(`Área del rectángulo: ${rectangulo2.calcularArea()}`);
console.log(`Descripción del rectángulo: ${rectangulo2.obtenerDescripcion()}`);
console.log('');

// Creando los círculos
console.log("Creando Círculo 1...");
let circulo1 = new Circulo('Circulo 1', 5);
console.log(`Nombre del círculo: ${circulo1.obtenerNombre()}`);
console.log(`Área del círculo: ${circulo1.calcularArea()}`);
console.log(`Diámetro del círculo: ${circulo1.obtenerDiametro()}`);
console.log('');

console.log("Creando Círculo 2...");
let circulo2 = new Circulo('Circulo 2', 10);
console.log(`Nombre del círculo: ${circulo2.obtenerNombre()}`);
console.log(`Área del círculo: ${circulo2.calcularArea()}`);
console.log(`Diámetro del círculo: ${circulo2.obtenerDiametro()}`);