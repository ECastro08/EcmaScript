// set con la funcion add

const set = new Set()

set.add('item1');
set.add('item2');
set.add('item3').add('item4');

console.log(set);

// manipulacion de Sets
/*
add(value)  => añadir un nuevo valor
delete(value)  => elimina el elemento que contiene el set
has(value)  => retorna un booleano si existe o no el valor dentro del set
clear(value)  => elimina todos los valores del set
size  => retorna la cantidad de elementos del set
*/
set.add();
set.has('item4');
set.has();
set.clear();
set.size;