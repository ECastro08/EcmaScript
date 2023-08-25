// ?? para comprobar si un valor llega Nulo.

const anotherFn = null;
const validate = anotherFn ?? 3; // si la funcion anotherfn tiene un dato valido mostrara ese numero,
                                 // de lo contrario mostrara el numero 3.
console.log(validate);