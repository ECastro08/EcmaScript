
// forma de concatenar strings sin los literals template
let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' '+ world;
console.log(epicPhrase);

// Concatenar usando template literals 
let epicPhrase2 = `${hello} ${world} !`;
console.log(epicPhrase2);

// multi-line strings

// sin template literal
let lorem = 'esto es un string \n ' + 'esto es otra linea';

// con template literal
let lorem2 = `esta es una frase epica
la continuacion de esa frase epica
`;
console.log(lorem);
console.log(lorem2);