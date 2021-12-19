const express = require("express");
const mongoose = require("mongoose");
const libros = require("./routes/routes.libros");
const autores = require("./routes/routes.autores");
const bodyParser = require("body-parser");
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ejercici3");

app.use(bodyParser.json());
app.use("/libros", libros);
app.use("/autores", autores);

app.listen(3000, console.log("App en el puerto 3000"));
