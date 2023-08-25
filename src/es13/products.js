import fetch from "node-fetch";

// await debe estar porque si no arrojaría error porque necesita esperar hacer el fetch y luego transformar a un objeto
const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export {products};