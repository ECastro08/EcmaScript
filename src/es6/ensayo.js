
function solution(
    json1 = {
      name: "Mr . michi",
      food:"pescado"
    }, 
    json2 = {
      age: 12,
      color: "blanco"
    }
    ) {
    return ({...json1, ...json2})
  } 
  var salida = solution({ name: "Bigotes", food: "pollito" });
  console.log(salida);