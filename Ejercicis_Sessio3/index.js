const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ejercici3");
}

const libroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    minlength: 3,
  },
  editorial: {
    type: String,
  },
  precio: {
    type: Number,
    required: true,
    min: [0, "Debe ser igual o mayo a 0"],
  },
});

//Asignamos un esquema a un modelo

const Libro = mongoose.model("libros", libroSchema);

//Añadir DOcumentos

const libro1 = new Libro({
  titulo: "El capitán Alatriste",
  editorial: "Alfaguara",
  precio: 15,
});
const libro2 = new Libro({
  titulo: "El juego de Ender",
  editorial: "Ediciones B",
  precio: 8.95,
});

//açò es com una promesa

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
