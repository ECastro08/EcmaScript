const user = { username: 'ecastro', edad : 12, pais: 'Colombia' };
const {username, ...values} = user;

console.log(username);
console.log(values);