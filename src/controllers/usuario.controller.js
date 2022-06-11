const express = require('express')
const router = express.Router()

router.get('/usuario', (req, res) => {
    res.send('aca van los usuarios')
})

router.get('/usuario/:id', (req, res) => {
    let id = req.params.id

    res.send(`aca van el usuario con id ${id}`)
})

router.post('/usuario', (req, res) => {
    let usuario = req.body

    res.send(`aca se crea el usuario ${JSON.stringify(usuario)}`)
})

router.put('/usuario/:id', (req, res) => {

})

router.delete('/usuario/:id', (req, res) => {

})

module.exports = router