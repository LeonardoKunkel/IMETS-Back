const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/apiIMETS", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Base de datos en \x1b[32m', 'linea'))
    .catch((err) => console.log('Error'));
