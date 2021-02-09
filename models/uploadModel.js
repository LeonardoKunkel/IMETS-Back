const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    upload: {type: String}
});

module.exports = mongoose.model('Upload', uploadSchema);
