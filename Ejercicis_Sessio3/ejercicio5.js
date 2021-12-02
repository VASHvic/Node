const mongoose = require("mongoose");
const Libro = require("./models/Libro");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ejercici3");
}
main().catch((err) => console.log(err));

// const web = https://www.geeksforgeeks.org/mongoose-find-function/?ref=lbp

Libro.find({ precio: { $gt: 10 } }, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("First function call : ", docs);
  }
});

var id = "61a9293c70777d7c7b5b8b18";
Libro.findById(id, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("Result : ", docs);
  }
});
