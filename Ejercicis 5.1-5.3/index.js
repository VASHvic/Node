const personas = require("./personas");
const lo = require("lodash");

const vectorPersonas = [
  { nombre: "Pepe" },
  { nombre: "Ana" },
  { nombre: "Juan" },
];

const arrayLodash = ["Pepe", "Ana", "Juan"];

personas.añadirPersona("victor", vectorPersonas);
personas.borarPersona("Ana", vectorPersonas);

console.log(vectorPersonas);
console.log(lo.join(arrayLodash, ", "));
