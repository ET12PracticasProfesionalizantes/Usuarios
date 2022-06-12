const express = require('express')

const app = express()

const port = process.env.PORT || 3000;

const db = require('./models')

app.use(express.json());

app.use('/api', require('./controllers/usuario.controller'))

db.sequelize.sync()
    .then(() => {
        app.listen(port)
    }).catch(error => {
        console.log(error)
    })
