const Libro = require("./models/Libro");
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ejercici3");
}

main().catch((err) => console.log(err));

const libro1 = new Libro({
  titulo: "El capitán Alatriste",
  editorial: "Alfaguara",
  precio: 12,
});
const libro2 = new Libro({
  titulo: "El juego de ender",
  editorial: "Ediciones B",
  precio: 8.95,
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
