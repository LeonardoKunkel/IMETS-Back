const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const anexo4Schema = new Schema({
    fecha1: String,
    plataforma: String,
    equipo: String,
    pozoLoc: String,
    departamento1: String,
    departamento2: String,
    departamento3: String,
    nombre1: String,
    nombre2: String,
    nombre3: String,
    ficha1: String,
    ficha2: String,
    ficha3: String,
});

module.exports = mongoose.model('anexo_4', anexo4Schema);
