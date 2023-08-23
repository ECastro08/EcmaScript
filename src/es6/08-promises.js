// creamos la funcion
const promesa = () => {
    return new Promise((resolve, reject) => {
      if (something) {
        //true o false
        resolve("Se ha resuelto la promesa")
      } else {
        reject("Se ha rechazado la promesa")
      }
    })
  }