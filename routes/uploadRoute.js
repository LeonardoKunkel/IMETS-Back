const express = require('express'),
      uploads = require('../models/uploadModel'),
      app = express();

app.post('/upload', (req, res) => {
    const body = req.body;
    console.log(body);
    let newUpload = {
        upload: body.upload
    };
    
    uploads.create(newUpload, (err, fileCreated) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'Error al subir archivo',
                err
            });
        }
        res.status(200).json({
            ok: true,
            fileCreated
        });
    });
});

module.exports = app;
