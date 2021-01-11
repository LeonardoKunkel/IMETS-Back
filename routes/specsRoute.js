const express = require('express'),
      specsModel = require('../models/specsModel'),
      app = express();
  
  
// Get
app.get('/', (req, res) => {
    specsModel.find((err, specs) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se pudieron consultar las especificaciones',
                err
            });
        }
        res.status(200).json({
            ok: true,
            specs
        });
    });
});

// Post
app.post('/create', (req, res) => {
    let body = req.body;
    let newData = {
        ubicacion: body.ubicacion,
        nuevos: body.nuevos,
        premium: body.premium,
        maquinar: body.maquinar,
        cambio: body.cambio,
        inspeccionar: body.inspeccionar,
        baja: body.baja,
        perdidas: body.perdidas,
        cementados: body.cementados,
        chuecos: body.chuecos,
        sinRevestimiento: body.sinRevestimiento,
        total: body.total
    };
    specsModel.create(newData, (err, specCreados) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se registraro la especificacion',
                err
            });
        }
        res.status(201).json({
            ok: true,
            specCreados
        });
    });
});

module.exports = app;

