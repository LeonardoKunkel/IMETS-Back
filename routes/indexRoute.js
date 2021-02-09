const { Router } = require('express');
const router = Router();

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    const {email, password} = req.body;
    const nuevoUsuario = new User({email, password});
    console.log(nuevoUsuario);
    await nuevoUsuario.save();
    
    const token = jwt.sign({ _id: nuevoUsuario._id }, 'secretkey');
    res.status(200).json({token});
});

router.post('/signin', async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({email});
    if (!user) return res.status(401).send('El email no existe');
    if (user.password !== password) return res.status(401).send('Contraseña incorrecta')
    
    const token = jwt.sign({_id: user._id}, 'secretkey');
    return res.status(200).json({token});
});

router.get('/tasks', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task One',
            description: 'lorem ipsum',
            date: '2021-01-22T12:52:15.211Z'
        },
        {
            _id: 2,
            name: 'Task Two',
            description: 'lorem ipsum',
            date: '2021-01-22T12:52:15.211Z'
        },
        {
            _id: 3,
            name: 'Task Three',
            description: 'lorem ipsum',
            date: '2021-01-22T12:52:15.211Z'
        },
    ]);
});

router.get('/private-tasks', verifyToken, (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task One',
            description: 'lorem ipsum',
            date: '2021-01-22T12:52:15.211Z'
        },
        {
            _id: 2,
            name: 'Task Two',
            description: 'lorem ipsum',
            date: '2021-01-22T12:52:15.211Z'
        },
        {
            _id: 3,
            name: 'Task Three',
            description: 'lorem ipsum',
            date: '2021-01-22T12:52:15.211Z'
        },
    ]);
});

router.get('/profile', verifyToken, (req, res) => {
    res.send(req.userId);
});

module.exports = router;

function verifyToken(req, res, next) {
    console.log(req.headers);
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    
    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }
    
    const payload = jwt.verify(token, 'secretkey');
    req.userId = payload._id;
    next();
}
