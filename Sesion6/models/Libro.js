const mongoose = require("mongoose");

const comentarioSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
    dafault: () => Date.now(),
  },
  nick: {
    type: String,
    required: true,
  },
  comentario: {
    type: String,
    required: true,
  },
});

// const Comentario = mongoose.model("comentario", comentarioSchema);

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
  autor: {
    type: mongoose.Schema.Types.ObjectId,
  },
  comentarios: [{ comentarioSchema }],
});

const Libro = mongoose.model("libros", libroSchema);

module.exports = Libro;
