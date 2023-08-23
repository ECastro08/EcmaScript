// Declaración de la clase Animal
class Animal {

	// Constructor: le enviamos a la clase los valores para los atributos del nuevo objeto (como argumentos) y el constructor se encarga de asignarlos:
	// (Recordar: this hace referencia al objeto).
	constructor(especie, edad, patas) {
		this.especie = especie; // Asignar atributo especie al objeto
		this.edad = edad; // Asignar atributo edad al objeto
		this.patas = patas; // Asignar atributo patas al objeto
	}

	// Métodos de la clase: pueden contener cualquier lógica.
	dormir() {
		return 'Zzzz';
	}

	comer() {
		return 'Yummy!';
	}

	caminar() {
		return '¡Caminando!, la la la';
	}

	// Getter y Setter (solo para edad para no alargar)
	// (Recordar: this hace referencia al objeto)
	get getEdad() {
		return this.edad;
	}

	set setEdad(newEdad) {
		this.edad= newEdad;
	}
}

// Ahora instanciemos los objetos: tendremos perro, paloma y gato como objetos de tipo Animal. Al enviar el valor de los atributos como argumentos, el constructor automáticamente los asigna al nuevo objeto.
const perro = new Animal('canino', 3, 4);
const paloma = new Animal('ave', 1, 2);
const gato = new Animal('felino', 2, 4);

// Podemos acceder a los métodos desde cada objeto:
perro.dormir();	// Retorna 'Zzzz'
paloma.comer(); // Retorna 'Yummy!'
gato.caminar(); // Retorna '¡Caminando!, la la la'

// Usamos los getter para obtener los valores de los atributos y los setters para reasignarlos.
perro.getEdad; // Retorna 3
gato.setEdad = 3; // Cambia su atributo edad a 3



//Se declara la clase:

class NombredelaClase {
    //atributos y metodos
}

//Se crea una instancia (objeto), de la clase:

const NuevoObjeto = new NombredelaClase();


/// EJEMPLO MIO 

class auto {

    // atributos
    constructor(modelo, cilindraje , color) {
		this.modelo = modelo;  
		this.cilindraje = cilindraje 
		this.color = color;
	}

    // metodos
    acelerar() {
        return 'brummmmmm'
    }
    frenar() {
        return 'chiiiiiii'
    }
    embragar() {
        return 'embrague'
    }

// set y get 

get getColor() {
    return this.color;
}

set setColor(newColor) {
    this.color = newColor;
}

};


// Instanciamos la clase

const newAuto = new auto();
acelerar = newAuto.acelerar();
embragar = newAuto.embragar();
frenar = newAuto.frenar();

console.log(acelerar, frenar, embragar);

const auto1 = new auto(2019, 1600, 'rojo');
const auto2 = new auto(2023, 1400, 'azul oscuro');

auto1.acelerar();

auto1.get
