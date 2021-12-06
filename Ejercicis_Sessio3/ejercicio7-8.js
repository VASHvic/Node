const mongoose = require("mongoose");
const Libro = require("./models/Libro");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ejercici3");
}
main().catch((err) => console.log(err));

var libro_id = "61ae1c2cc22add344eeb50d7";
Libro.findByIdAndUpdate(
  libro_id,
  { $set: { precio: 11 }, $inc: { __v: 1 } },
  { new: true }
)
  .then((resultado) => {
    console.log("Libro modificado:", resultado);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });
