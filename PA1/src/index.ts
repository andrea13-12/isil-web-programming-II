class FiguraGeometrica {
    public nombre: string; 

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public obtenerNombre(): string { 
        return this.nombre;
    }
}

class Rectangulo extends FiguraGeometrica {
    private base: number;
    private altura: number;

    constructor(nombre: string, base:number, altura: number){
        super(nombre);
        this.altura = altura;
        this.base = base;
    }

    public calcularArea(): number{
        return this.base * this.altura;
    }

    public obtenerDescripcion(): string {
        return `Tenemos el : ${this.nombre} ,el cual cuenta con una base de : ${this.base} y una altura de: ${this.altura}.`
    }

}

class Circulo extends FiguraGeometrica {
    private radio: number; 
    constructor(nombre:string, radio:number){
        super(nombre);
        this.radio = radio;
    }

    public calcularArea(){
        return Math.PI * this.radio * this.radio
    }

    public obtenerDiametro(){
        return this.radio * 2
    }
}

//Creando Rectangulos
console.log(`Creando Rectángulo 1...`);
let rectangulo1 = new Rectangulo('Rectángulo 1', 10, 5);
console.log(`Nombre del rectángulo: ${rectangulo1.obtenerNombre()}`);
console.log(`Área del rectángulo: ${rectangulo1.calcularArea()}`);
console.log(`Descripción del rectángulo: ${rectangulo1.obtenerDescripcion()}`);
console.log('');

console.log(`Creando Rectángulo 2...`);
let rectangulo2 = new Rectangulo('Rectángulo 2', 30,20);
console.log(`Nombre del rectángulo: ${rectangulo2.obtenerNombre()}`);
console.log(`Área del rectángulo: ${rectangulo2.calcularArea()}`);
console.log(`Descripción del rectángulo: ${rectangulo2.obtenerDescripcion()}`);
console.log('');

//Creando los ciruclos 
console.log(`Creando Círculo 1...`);
let circulo1 = new Circulo('Círculo 1', 20);
console.log(`Nombre del círculo: ${circulo1.obtenerNombre()}`);
console.log(`Área del círculo: ${circulo1.calcularArea()}`);
console.log(`Diámetro del círculo: ${circulo1.obtenerDiametro()}`);
console.log('');

console.log(`Creando Círculo 2...`);
let circulo2 = new Circulo('Círculo B', 40);
console.log(`Nombre del círculo: ${circulo2.obtenerNombre()}`);
console.log(`Área del círculo: ${circulo2.calcularArea()}`);
console.log(`Diámetro del círculo: ${circulo2.obtenerDiametro()}`);