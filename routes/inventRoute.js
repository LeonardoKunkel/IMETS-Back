const express = require('express'),
      inventarioModel = require('../models/inventModel'),
      app = express();
  
  
// Get
app.get('/', (req, res) => {
    inventarioModel.find().populate('specs').exec((err, inv) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se pudieron consultar los datos',
                err
            });
        }
        res.status(200).json({
            ok: true,
            inv
        });
    });
});

// Post
app.post('/create', (req, res) => {
    console.log(req.body);
    let body = req.body;
    let newData = {
        descripcion: body.descripcion,
        diametro: body.diametro,
        grado: body.grado,
        libraje: body.libraje,
        conexP: body.conexP,
        conexC: body.conexC,
        specs: body.specs
    };
    inventarioModel.create(newData, (err, inventarioCreado) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se registraron los datos',
                err
            });
        }
        res.status(201).json({
            ok: true,
            inventarioCreado
        });
    });
});

module.exports = app;
