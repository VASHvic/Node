const express = require("express");
let Autor = require(__dirname + "/../models/Autor.js");
let router = express.Router();

router.get("/", async (req, res) => {
  try {
    const resultado = await Autor.find();
    res.send(resultado);
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    let nuevoAutor = await new Autor({
      nombre: req.body.nombre,
      anyo_nacimiento: req.body.anyo_nacimiento,
    });
    nuevoAutor.save();
    res.send({ error: false, resultado: nuevoAutor });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
});
router.put("/:id", (req, res) => {
  Autor.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        nombre: req.body.nombre,
        anyo_nacimiento: req.body.anyo_nacimiento,
      },
    },
    { new: true }
  )
    .then((resultado) => {
      res.send({ error: false, resultado: resultado });
    })
    .catch((error) => {
      res.send({ error: true, mensajeError: "Error actualizando autor" });
    });
});

module.exports = router;
