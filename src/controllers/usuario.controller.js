const express = require('express')
const router = express.Router()
const db = require('../models')
const Usuario = db.Usuario

router.get('/usuario', async (req, res) => {
    await Usuario.findAll({})
        .then(data => {
            res.send(data)
        }).catch(error => {
            res.status(500).send({
                message: error.message
            })
        })
})

router.get('/usuario/:id', async (req, res) => {
    let id = req.params.id

    await Usuario.findByPk(id)
        .then(data => {
            res.send(data)
        }).catch(error => {
            res.status(500).send({
                message: error.message
            })
        })
})

router.post('/usuario', async (req, res) => {
    console.log(req.body)
    if (!req.body.usuario || !req.body.contrasenia || !req.body.email) {
        res.status(400).send({
            message: "Los campos usuario, contraseña y email son obligatorios"
        });
        return;
    }

    const nuevoUsuario = {
        usuario: req.body.usuario,
        contrasenia: req.body.contrasenia,
        email: req.body.email,
        nombre: req.body.nombre,
        lastName: req.body.lastName,
        habilitado: false,
        createAt: Date.now(),
        updatedAt: Date.now(),
    };

    const data = await Usuario.create(nuevoUsuario)

    res.send({
        message: 'Usuario creado'
    })
})

router.put('/usuario/:id', async (req, res) => {
    const id = req.params.id;

    await User.update(req.body, {
        where: { id: id }
    }).then(data => {
        if (data != 1) {
            res.send({
                message: `No se puede actualizar el usuario con id=${id}`
            });
        }
    }).catch(error => {
        res.status(500).send({
            message: error.message
        })
    })
})

router.delete('/usuario/:id', async (req, res) => {
    let id = req.params.id

    await Usuario.destroy({
        where: {
            id: id
        }
    }).then(data => {
        if (data == 1)
            res.send({
                message: 'Usuario eliminado'
            })
        else
            res.send({
                message: `No se pudo eliminar el usuario con id: ${id}`
            })
    }).catch(error => {
        res.send(500, {
            message: error.message
        })
    })
})

module.exports = router