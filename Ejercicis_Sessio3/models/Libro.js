const mongoose = require("mongoose");

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
    min: [0, "Debe ser igual o mayor a 0"],
  },
});

const Libro = mongoose.model("libros", libroSchema);

module.exports = Libro;
