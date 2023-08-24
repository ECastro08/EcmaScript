// funcion normal de crear una funcion

function square(num) {
    return num*num;
}

square(2);
console.log(square(2))

// funcion con arrow function 

const square = (num) => {
    return num*num;
}

// function con el return implicito

const square = num => num * num; 

square(2)
console.log(square(3))