const mongoose = require("mongoose");

const autorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  anyo_nacimiento: {
    type: Number,
    min: 0,
    max: 2000,
  },
});

const Autor = mongoose.model("autor", autorSchema);

module.exports = Autor;
