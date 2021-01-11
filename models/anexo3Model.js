var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const anexo3Schema = new Schema({
    fecha1: Date,
    division: String,
    unidadOp: String,
    plataforma: String,
    equipo: String,
    pozoLoc: String,
    fecha2: Date
});

module.exports = mongoose.model('anexo_3', anexo3Schema);
