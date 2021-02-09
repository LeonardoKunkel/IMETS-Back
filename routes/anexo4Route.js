const express = require('express'),
      anexo4Model = require('../models/anexo4Model'),
      app = express();
      
app.post('/create', (req, res) => {
    let body = req.body;
    let newData = {
        fecha1: body.fecha1,
        plataforma: body.plataforma,
        equipo: body.equipo,
        pozoLoc: body.pozoLoc,
        departamento1: body.departamento1,
        departamento2: body.departamento2,
        departamento3: body.departamento3,
        nombre1: body.nombre1,
        nombre2: body.nombre2,
        nombre3: body.nombre3,
        ficha1: body.ficha1,
        ficha2: body.ficha2,
        ficha3: body.ficha3,
    };
    anexo4Model.create(newData, (err, anexo4) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se registraron los datos',
                err
            });
        }
        res.status(200).json({
            anexo4
        });
    });
});

app.get('/', (req, res) => {
    anexo4Model.find((err, anexo4) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se pudieron consultar los datos',
                err
            });
        }
        res.status(200).json({
            anexo4
        });
    });
});

module.exports = app;
      