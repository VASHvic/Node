const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ejercici3");
}
main().catch((err) => console.log(err));
