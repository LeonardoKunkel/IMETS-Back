const mongoose = require('mongoose'),
     Schema = mongoose.Schema;
    
const inventarioSchema = new Schema({

    descripcion: { type: String },
    diametro: { type: String },
    grado: { type: String },
    libraje: { type: String },
    conexP: { type: String },
    conexC: { type: String },
    specs: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Especificacion'
    }
});

module.exports = mongoose.model('Inventario', inventarioSchema);
