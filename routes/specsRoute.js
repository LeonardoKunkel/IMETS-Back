const { param } = require('./uploadRoute');

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

// Get ID
app.get('/:id', (req, res) => {
    let id = req.params.id;
    specsModel.findById(id, (err, findSpecs) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se encontró el ID',
                err
            });
        }
        res.status(200).json({
            ok: true,
            findSpecs
        });
    });
});


// Update
app.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    
    specsModel.findById(id, (err, newDato) => {
        if (err) {
            return res.status(400).json({
                ok: true,
                message: `No se encontró el id ${id}`,
                err
            });
        }
        
        if(!newDato) {
            return res.status(500).json({
                ok: true,
                message: `No hay dato con el id ${id}`
            });
        }
        newDato.ubicacion = body.ubicacion;
        newDato.nuevos = body.nuevos;
        newDato.premium = body.premium;
        newDato.maquinar = body.maquinar;
        newDato.cambio = body.cambio;
        newDato.inspeccionar = body.inspeccionar;
        newDato.baja = body.baja;
        newDato.perdidas = body.perdidas;
        newDato.cementados = body.cementados;
        newDato.chuecos = body.chuecos;
        newDato.sinRevestimiento = body.sinRevestimiento;
        newDato.total = body.total;
        
        newDato.save((err, datoActualizado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error al actualizar'
                });
            }
            return res.status(200).json({
                datoActualizado
            });
        });
    });
});

module.exports = app;

