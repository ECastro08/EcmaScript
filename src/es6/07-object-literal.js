// objects

function newUser(name, age, country, uId) {
    return {
        name,
        age,
        country,
        uId,
    }
}

// pasamos los argumentos al llamar la funcion 
console.log(newUser("Ecp", 2, "Colombia", 1))