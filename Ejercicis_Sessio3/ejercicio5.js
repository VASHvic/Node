const mongoose = require("mongoose");
const Libro = require("./models/Libro");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ejercici3");
}
main().catch((err) => console.log(err));

Libro.find({ precio: { $gt: 10 } }, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("Libros con precio mayor a 10 : ", docs);
  }
});

var id = "61ae1ab49426ced477250d35";
Libro.findById(id, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("Resultado de la búsqueda por ID : ", docs);
  }
});
