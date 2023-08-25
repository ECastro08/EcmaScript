// 
const regex = /\b(Apple)+\b/g; // patron de busqueda de la palabra apple 

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}