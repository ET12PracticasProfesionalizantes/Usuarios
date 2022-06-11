module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contrasenia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        habilitado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    return Usuario;
};