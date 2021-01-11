const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      dtiRoute = require('../routes/dtiRoute'),
      invRoute = require('../routes/inventRoute'),
      specsRoute = require('../routes/specsRoute'),
      app = express();
      cors = require('cors'),

mongoose.connect("mongodb://localhost:27017/apiIMETS",
                    {
                        useNewUrlParser: true,
                        useCreateIndex: true,
                        useUnifiedTopology: true
                    }
                ) . then(() => console.log('Base de datos en \x1b[32m', 'linea')).catch((err) => console.log('Error'));
     
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rutas
app.get('/', (req, res) => {
   res.send('Estás en IMETS'); 
});
app.use('/dti', dtiRoute);
app.use('/inv', invRoute);
app.use('/specs', specsRoute);

//Revisar el puerto
app.listen(3000, () => console.log('Estoy vivo'));
