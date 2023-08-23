var lastName = 'David';   // declarar y asignar
lastName = 'Oscar';       // Reasignar variable
console.log(lastName);


let fruit = 'manzana';    // declarar y asignar
fruit = 'kiwi';           // Reasignación
console.log(fruit);


const animal = 'perro';   // declaracion y asignacion
animal = 'gato';          // reasignacion prohibida
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'apple';        // function scope
        let fruit2 = 'kiwi';         // block scope
        const fruit3 = 'Banana'      // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();