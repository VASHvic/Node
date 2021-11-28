const persona = {
  añadirPersona(nombre, array) {
    const persona = { nombre: nombre };
    array.push(persona);
  },
  borarPersona(nombre, array) {
    array.forEach((element, index) => {
      if (element.nombre === nombre) {
        array.splice(index, 1);
      }
    });
  },
};

module.exports = persona;
