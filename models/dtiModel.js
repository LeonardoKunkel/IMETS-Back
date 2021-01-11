var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
const dtiSchema = new Schema({
    descripcion: String,
    porcentaje: Number,
    tipo: String
});

module.exports = mongoose.model('Descripcion_DTI', dtiSchema);
