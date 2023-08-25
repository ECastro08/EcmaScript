// creamos la promesa 

const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('oppppps !');
        }
    })
}

anotherFuncion()
    .then(Response => console.log(Response));
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));