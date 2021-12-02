const Libro = require("./models/Libro");
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ejercici3");
}

const libro3 = new Libro({
  titulo: "A",
  editorial: "",
  precio: 12,
});

libro3
  .save()
  .then((resultado) => {
    console.log("libro añadido:", resultado);
  })
  .catch((error) => {
    console.log("ERROR añadiendo libro:", error);
  });
