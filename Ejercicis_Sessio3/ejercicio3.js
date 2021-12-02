const Libro = require("./models/Libro");
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ejercici3");
}
const libro1 = new Libro({
  titulo: "El capitán pescanova",
  editorial: "Alfaguara",
  precio: 1,
});
const libro2 = new Libro({
  titulo: "El juego de Bender",
  editorial: "Ediciones C",
  precio: 87.95,
});

libro1
  .save()
  .then((resultado) => {
    console.log("libro añadido:", resultado);
  })
  .catch((error) => {
    console.log("ERROR añadiendo libro:", error);
  });
libro2
  .save()
  .then((resultado) => {
    console.log("libro añadido:", resultado);
  })
  .catch((error) => {
    console.log("ERROR añadiendo libro:", error);
  });
