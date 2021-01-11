const express = require('express'),
      anexo3Model = require('../models/anexo3Model'),
      app = express();
      
// Post
app.post('/create', (req, res) => {
    let body = req.body;
    let newData = {
        fecha1: body.fecha1,
        division: body.division,
        unidadOp: body.unidadOp,
        plataforma: body.plataforma,
        equipo: body.equipo,
        pozoLoc: body.pozoLoc,
        fecha2: body.fecha2
    };
    anexo3Model.create(newData, (err, anexo3) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se registraron los datos',
                err: err
            });
        }
        res.status(200).json({
            anexo3: anexo3
        });
    });
});

// Get
app.get('/', (req, res) => {
    anexo3Model.find((err, anexo3) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se pudieron consultar los datos'
            });
        }
        res.status(200).json({
            anexo3
        });
    });
});
