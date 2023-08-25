// manejo de enteros muy grandes
// BigInt permite manejar enteros muy grandes, se puede crear de 2 formas
// 1. el numero entero seguido de n
// 2. mediante la funcion BigInt()

const bigNumber = 257547218787138738n;
const bigNumber2 = BigInt(257547218787138738);

console.log(bigNumber);
console.log(bigNumber2);