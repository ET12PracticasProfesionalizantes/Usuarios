# Usuarios

## Crear un proyecto desde cero

Completar los siguiente pasos con el comando

```
npm init
```

Esto creara el archivo **package.json** con las opciones ingresadas

## Instalar dependencias

```
npm install express --save
```

```
npm install nodemon --save-dev
```

```
npm install sequelize --save 
```

```
npm install sequelize-cli --save-dev 
```

```
npm install mysql2 --save
```

## Migraciones

Crea modelos de datos (los campos id, createdAt, updatedAt se crean solos)

```
sequelize-cli model:generate --name Usuario --attributes usuario:string,contrasenia:string,email:string,habilitado:boolean

sequelize-cli model:generate --name Rol --attributes nombre:string

sequelize-cli model:generate --name Login --attributes idUsuario:integer
```

Crea la base de datos (vacia) utilizando las credenciales del ambiente **development** en el archivo **config/config.json**

```
sequelize-cli db:create
```

Crea las tablas en la base de datos especificada en el archivo **config/config.json**


```
sequelize-cli db:migrate
```