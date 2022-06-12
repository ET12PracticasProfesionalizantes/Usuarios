# Usuarios

## Configuracion

1. Clonar el repositorio

```
git clone https://github.com/ET12PracticasProfesionalizantes/Usuarios
```

2. Acceder al directorio **Usuarios**
```
cd Usuarios
```

3. Instalar dependencias

```
npm install 
```

4. Modificar las credenciales de la db local, en el archivo **src/config/config.js**

```json
development: {
    username: "root",
    password: "root",
    database: "usuarios",
    host: "127.0.0.1",
    dialect: "mysql"
  }
```

5. Crear la base de datos con nombre **usuarios** en mysql

6. Ejercutar el proyecto

```
nodemon
```
