const express = require('express'),
      dtiModel = require('../models/dtiModel'),
      app = express();
      
// Post
app.post('/create', (req, res) => {
    let body = req.body;
    let newData = {
        descripcion: body.descripcion,
        porcentaje: body.porcentaje,
        tipo: body.tipo
    };
    dtiModel.create(newData, (err, dti) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se pudieron registrar los datos',
                err: err
            });
        }
        res.status(200).json({
            dti: dti
        });
    });
});

// Get
app.get('/', (req, res) => {
    dtiModel.find((err, dti) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se pudieron consultar las actividades',
                err
            });
        }
        res.status(200).json({
            dti
        });
    });
});

// Get ID
app.get('/:id', (req, res) => {
    let id = req.params.id;
    dtiModel.findById(id, (err, newDti) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: `No se encontraron los datos con el id ${id}`,
                err
            });
        }
        res.status(200).json({
            newDti
        });
    });
});

// Update
app.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    dtiModel.findById(id, (err, newDti) => {
        if (err) {
            return res.status(200).json({
                ok: true,
                message: `No se encontroel id ${id}`,
                err
            });
        }
        if (!newDti) {
            return res.status(500).json({
                ok: true,
                message: `No existe una actividad con el id ${id}`
            });
        }
        newDti.descripcion = body.descripcion,
        newDti.porcentaje = body.porcentaje,
        newDti.tipo = body.tipo
        
        newDti.save((err, dtiActualizado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error al actualizar'
                });
            }
            return res.status(200).json({
                dtiActualizado
            });
        });
    });
});

// Delete ID
app.delete('/:id', (req, res) => {
    let id = req.params.id;
    dtiModel.findByIdAndRemove(id, (err, dtiEliminado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                message: 'No se puede borrar',
                err
            });
        }
        if(!dtiEliminado) {
            return res.status(400).json({
                ok: false,
                message: 'No su pudo borrar',
                err
            });
        }
        res.status(200).json({
            dtiEliminado
        });
    });
});

module.exports = app;
