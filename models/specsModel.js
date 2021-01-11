const mongoose = require('mongoose');

const specsSchema = new mongoose.Schema({
    ubicacion: String,
    nuevos: Number,
    premium: Number,
    maquinar: Number,
    cambio: Number,
    inspeccionar: Number,
    baja: Number,
    perdidas: Number,
    cementados: Number,
    chuecos: Number,
    sinRevestimiento: Number,
    total: Number,
});

module.exports = mongoose.model('Especificacion', specsSchema);
