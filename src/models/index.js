const Sequelize = require('sequelize');

const db = {}

let sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'usuarios',
    dialect: 'mysql'
});
db.sequelize = sequelize

db.Usuario = require('./usuario.model.js')(sequelize, Sequelize)

module.exports = db;