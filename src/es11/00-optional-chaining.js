// con el simnolo ?

const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    },
    Tatiana: {
        country: "CO"
    }
}
console.log(users.Tatiana.country); // accedemos al hijo ana del users ademas de la propiedad de country
console.log(users?.bebeloper?.country); // con el optional changing buscaremos una propiedad que no existe , pero nos devolvera un undefined en vez de error
