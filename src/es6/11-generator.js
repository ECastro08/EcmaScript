// iterador personalizado
// Declaración

/* function* nombre(parámetros){
    yield (primer valor retornado);
    yield (segundo valor retornado);
    ...
    yield (último valor retornado)
}

//Crear el generador
const generador = nombre(argumentos)

// Invocaciones
generador.next().value //primer valor retornado
generador.next().value //segundo valor retornado
...
generador.next().value //último valor retornado
*/

// ejemplo de Generator

function* generator(){
    yield 1
    yield 2
    yield 3
}

const generador = generator()

generador.next().value //1
generador.next().value //2
generador.next().value //3
generador.next() // {value: undefined, done: true}

// ejemplo2 

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['mango', 'fresa', 'banano', 'lulo']);
console.log(it.next().value);  //primer valor
console.log(it.next().value);  //segundo valor
console.log(it.next().value);  // tercer valor

// RETO platzi identificadores de mishis

function* getId() {
    // Tu código aquí 👈
    for (let i = 0; i < 10; i++) {
      yield i;
    }   
}

const idmichis = getId();
console.log(idmichis.next().value);
console.log(idmichis.next().value);
console.log(idmichis.next().value);
console.log(idmichis.next().value);

