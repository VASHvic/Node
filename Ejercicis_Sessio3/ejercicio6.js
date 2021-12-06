const mongoose = require("mongoose");
const Libro = require("./models/Libro");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ejercici3");
}
main().catch((err) => console.log(err));

var libro_id = "61ae1ab49426ced477250d35";
Libro.findByIdAndRemove(libro_id, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("Libro Borrado : ", docs);
  }
});
