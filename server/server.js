const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      multer = require('multer'),
      dtiRoute = require('../routes/dtiRoute'),
      invRoute = require('../routes/inventRoute'),
      specsRoute = require('../routes/specsRoute'),
      anexo1 = require('../routes/anexo1Route'),
      anexo3 = require('../routes/anexo3Route'),
      anexo4 = require('../routes/anexo4Route'),
      upload = require('../routes/uploadRoute');
const app = express();
      cors = require('cors');

const storage = multer.diskStorage({
    destination: 'public/uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// Conexión a la base de datos
require('../database');

app.use(express.json());
     
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Middlewares
app.use(multer({
    storage,
    dest: 'public/uploads'
}).single('imagen'));

//Rutas
app.get('/', (req, res) => {
   res.send('Estás en IMETS'); 
});
app.use(require('../routes/indexRoute'));
app.use('/dti', dtiRoute);
app.use('/inv', invRoute);
app.use('/specs', specsRoute);
app.use('/uploads', upload);
app.use('/anexo1', anexo1);
app.use('/anexo3', anexo3);
app.use('/anexo4', anexo4);

//Revisar el puerto
app.listen(3000, () => console.log('Estoy vivo'));
