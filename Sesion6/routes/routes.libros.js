const express = require("express");
let Libro = require(__dirname + "/../models/Libro.js");
let router = express.Router();

router.get("/", async (req, res) => {
  try {
    const resultado = await Libro.find();
    res.send(resultado);
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    let nuevoLibro = await new Libro({
      titulo: req.body.titulo,
      editorial: req.body.editorial,
      precio: req.body.precio,
    });
    nuevoLibro.save();
    res.send({ error: false, resultado: nuevoLibro });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
});

router.put("/:id", (req, res) => {
  Libro.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        titulo: req.body.titulo,
        editorial: req.body.editorial,
        precio: req.body.precio,
      },
    },
    { new: true }
  )
    .then((resultado) => {
      res.send({ error: false, resultado: resultado });
    })
    .catch((error) => {
      res.send({ error: true, mensajeError: "Error actualizando libro" });
    });
});

module.exports = router;
