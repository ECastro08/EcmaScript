// transformacion de objetos a arrays

// obtener los pares de valor de un objeto en array => object.entries()

const usuario = {
    name: "Eduardo",
    email: "fecastro@correo.com",
    age: 23
}

console.log(Object.entries(usuario)); 

// OBTENER LAS PROPIEDADES DE UN OBJETO  => object.keys()

const usuario2 = {name: "Eduardo", email: "fecastro@correo.com", age: 23}

console.log(Object.keys(usuario2)); 

// OBTENER LOS VALORES DE UN OBJETO EN UN ARRAY => object.values()

const usuario3 = {name: "Eduardo", email: "fecastro@correo.com", age: 23}

console.log(Object.values(usuario3)); 
