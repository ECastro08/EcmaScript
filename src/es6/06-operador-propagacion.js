// spread operator (operador de propagacion)
// utiliza tres puntos (...)

//para strings
const array = [...'Hola'];

// en arrays
const otherArray = [...array];

console.log(array);
console.log(otherArray);

// copiar utilizando el operador spread
const originalArray = [1, 2, 3, 4, 5];
const copyArray = [...originalArray];
// agregamos en el indice 0 del copy array un nuevo valor
copyArray[0] = 0;
// comparamos los arrays y nos devolvera falso
originalArray === copyArray;


// UNIR ARRAYS

const array1 = [1, 2, 3];
const number = 4;
const array2 = [5, 6, 7];

const arrayResult = [...array1, number, ...array2];
console.log(arrayResult);

// ejemplos

let person = {
    name: 'Eduardo',
    age: 23
};
let country = 'Colombia';

let data = {Id:1,...person, country};
console.log(data);



// PARAMETRO REST

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3, 4, 5);

// Obtener elementos restantes

const objeto = {
    nombre: "Andres",
    age: 23,
    plataforma: "Platzi"
  }
  const arr = [0,1,2,3,4,5];
  
  const {plataforma, ...usuario} = objeto;
  cons [cero, ...positivos] = arr;
  
  usuario // { nombre: 'Andres', age: 23 }
  positivos // [ 1, 2, 3, 4, 5 ]


  // DIFERENCIAS

  const arra = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...arra, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")