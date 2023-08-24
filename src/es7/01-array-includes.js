// includes para determinar si existe un valor retorna true o false 

let numbers = [1, 2, 3, 4, 5];  // creamos el arreglo
console.log(numbers.includes(4));  // con el includes(4) preguntamos si el valor 4 se encuentra en el array

// ejemplo 2

const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true