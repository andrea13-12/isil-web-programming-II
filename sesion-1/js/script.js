//Create a class
class Mascota{ //definimos un obj
    // creamos el construcctor |la funcion|
    constructor(nombre,edad,tipo){ //lo de parentesis es la abstraccion
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    } 

    //Creating Method - Function 
    presentarse(){
        console.log(`Hi im ${this.nombre}, i am ${this.edad} years and bread is ${this.tipo}`);
    }
}
//Herencia 
class Perro extends Mascota{ //creamos una clase perro que extiende de la clase mascota
    //tmb podemos crear nuestro propio construcctor donde colcamos las caracteristas que queremos que herede la class perro
    constructor(nombre,edad,raza){
        super(nombre,edad,'perro');//aqui indicamos los atributos heredados y cuales no
        this.raza = raza;
    }
    hacerSonido(){
        console.log(`${this.nombre} hace un sonido Guau Guau!!!!`);
    }
    correr(){ 
        console.log(`${this.nombre} esta corriendo alegremente!!!!`);
    } //estos son los metodos de perro

}

//Crear un objeto - new
let miPerro = new Mascota('Bony',5,'Labrador Retriver');
console.log(miPerro);
miPerro.presentarse(); 

let miOtroPerro = new Perro('Firulais',3,'Bulldog');
console.log(miOtroPerro);
miOtroPerro.correr();
miOtroPerro.hacerSonido();

let miGato = new Mascota('Pelusa',3,'Siames');
console.log(miGato);
miGato.presentarse();